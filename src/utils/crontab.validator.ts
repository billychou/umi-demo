interface CrontabValidatorOptions {
  verbose: boolean;
}

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

const DAYS_OF_WEEK = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const THIS_YEAR = new Date().getFullYear();

const SECONDS_BOUNDARIES: [number, number] = [0, 59];
const MINUTES_BOUNDARIES: [number, number] = SECONDS_BOUNDARIES;
const HOURS_BOUNDARIES: [number, number] = [0, 23];
const DAYS_OF_MONTH_BOUNDARIES: [number, number] = [1, 31];
const MONTHS_BOUNDARIES: [number, number] = [1, 12];
const DAYS_OF_WEEK_BOUNDARIES: [number, number] = [1, 7];
const YEARS_BOUNDARIES: [number, number] = [THIS_YEAR, 2199];

export class CrontabValidator {
  private _valid = false;
  private _verbose = false;
  private _errors: string[] = [];

  seconds?: string;
  minutes?: string;
  hours?: string;
  dayOfMonth?: string;
  month?: string;
  dayOfWeek?: string;
  year?: string;

  private get _result() {
    if (this._verbose) {
      return {
        valid: this._valid,
        errors: this._errors,
      };
    }

    return this._valid;
  }

  private static ERROR = {
    DAY_OF_WEEK: {
      EMPTY: "请输入星期",
      OUT_OF_RANGE: "星期请输入1 - 7 或者SUN, MON, TUE, WED, THU, FRI, SAT",
    },
    DAY_OF_MONTH: {
      EMPTY: "请输入日期",
      OUT_OF_RANGE: "日期请输入1 - 31",
    },
    MONTH: {
      EMPTY: "请输入月份",
      OUT_OF_RANGE: "月份请输入1 - 12 或者JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC",
    },
    YEAR: {
      EMPTY: "请输入年份",
      INVALID_EXPRESSION: "开始年份不能大于结束年份",
      OUT_OF_RANGE: `年份请输入${THIS_YEAR}-2199, 或者- 或者* 或者/ `,
    },
    SECOND: {
      EMPTY: "请输入秒",
      OUT_OF_RANGE: "秒请输入0 - 59",
    },
    MINUTE: {
      EMPTY: "请输入分钟",
      OUT_OF_RANGE: "分钟请输入0 - 59",
    },
    HOUR: {
      EMPTY: "请输入小时",
      OUT_OF_RANGE: "小时请输入0 - 23",
    },
    WRONG_EXPRESSION: "表达式格式错误",
    // TIME_MSG: "Minute and Second values must be between 0 and 59 and Hour Values must be between 0 and 23",
  };

  constructor(expression?: string, options?: CrontabValidatorOptions) {
    if (expression) this.test(expression);

    if (options && options.verbose === true) {
      this._verbose = true;
    }
  }

  test(
    expression: string,
    options?: {
      verbose: boolean;
    }
  ) {
    if (options?.verbose) {
      this._verbose = options.verbose;
    }

    if (!/\s/g.test(expression)) {
      this._errors.push(CrontabValidator.ERROR.WRONG_EXPRESSION);
      return this._result;
    }

    const values = expression.trim().split(" ");

    if (values.length !== 6 && values.length !== 7) {
      this._errors.push(CrontabValidator.ERROR.WRONG_EXPRESSION);
      return this._result;
    }

    this.seconds = values[0];
    this.minutes = values[1];
    this.hours = values[2];
    this.dayOfMonth = values[3];
    this.month = values[4];
    this.dayOfWeek = values[5];
    this.year = values[6] ?? undefined;

    this._valid =
      this.testSeconds(this.seconds) &&
      this.testMinutes(this.minutes) &&
      this.testHours(this.hours) &&
      this.testDayOfMonth(this.dayOfMonth) &&
      this.testMonth(this.month) &&
      this.testDayOfWeek(this.dayOfWeek) &&
      (this.year ? this.testYear(this.year) : true);
    return this._result;
  }

  testSeconds(expression: string) {
    if (expression === "") return this.falseWithError(CrontabValidator.ERROR.SECOND.EMPTY);
    return this.testTime(expression, SECONDS_BOUNDARIES, CrontabValidator.ERROR.SECOND.OUT_OF_RANGE);
  }

  testMinutes(expression: string) {
    if (expression === "") return this.falseWithError(CrontabValidator.ERROR.MINUTE.EMPTY);
    return this.testTime(expression, MINUTES_BOUNDARIES, CrontabValidator.ERROR.MINUTE.OUT_OF_RANGE);
  }

  testHours(expression: string) {
    if (expression === "") return this.falseWithError(CrontabValidator.ERROR.HOUR.EMPTY);
    return this.testTime(expression, HOURS_BOUNDARIES, CrontabValidator.ERROR.HOUR.OUT_OF_RANGE);
  }

  testDayOfMonth(expression: string) {
    if (expression === "") return this.falseWithError(CrontabValidator.ERROR.DAY_OF_MONTH.EMPTY);
    const testLimit = (_expr: string) => {
      if (this.testBoundaries(_expr, DAYS_OF_MONTH_BOUNDARIES)) return true;

      return this.falseWithError(CrontabValidator.ERROR.DAY_OF_MONTH.OUT_OF_RANGE);
    };

    if (expression === "*") {
      if (this.dayOfWeek === "*") return false;

      return true;
    }

    if (expression === "?") {
      if (this.dayOfWeek === "?") return false;

      return true;
    }

    const isLastDays = expression.toLowerCase() === "l" || expression.toLowerCase() === "lw";

    if (isLastDays) return true;

    if (/^[1-7]l$/.test(expression.toLowerCase())) {
      return true;
    }

    if (expression.includes("/")) {
      const values = expression.split("/");

      if (values.length !== 2) return this.falseWithError(CrontabValidator.ERROR.DAY_OF_MONTH.OUT_OF_RANGE);

      if (this.filterInt(values[0]) >= this.filterInt(values[1]))
        return this.falseWithError(CrontabValidator.ERROR.WRONG_EXPRESSION);

      if (this.testDayOfMonth(values[0])) return testLimit(values[1]);

      return this.falseWithError(CrontabValidator.ERROR.DAY_OF_MONTH.OUT_OF_RANGE);
    }

    if (expression.includes("-")) {
      const values = expression.split("-");

      if (values.length !== 2) return this.falseWithError(CrontabValidator.ERROR.WRONG_EXPRESSION);

      if (values[1].toLowerCase() === "l") return this.falseWithError(CrontabValidator.ERROR.DAY_OF_MONTH.OUT_OF_RANGE);

      if (this.testDayOfMonth(values[0])) return testLimit(values[1]);

      return this.falseWithError(CrontabValidator.ERROR.DAY_OF_MONTH.OUT_OF_RANGE);
    }

    if (expression.includes(",")) {
      const values = expression.split(",");

      if (
        !values.every((v) =>
          this.testTime(v, DAYS_OF_MONTH_BOUNDARIES, CrontabValidator.ERROR.DAY_OF_MONTH.OUT_OF_RANGE)
        )
      )
        return this.falseWithError(CrontabValidator.ERROR.DAY_OF_MONTH.OUT_OF_RANGE);

      return true;
    }

    return testLimit(expression);
  }

  testMonth(expression: string) {
    if (expression === "") return this.falseWithError(CrontabValidator.ERROR.MONTH.EMPTY);
    const testLimit = (_expr: string) => {
      if (this.testBoundaries(_expr, MONTHS_BOUNDARIES)) return true;
      if (MONTHS.includes(_expr.toLowerCase())) return true;

      return this.falseWithError(CrontabValidator.ERROR.MONTH.OUT_OF_RANGE);
    };

    if (expression === "*") return true;

    if (expression.includes("/")) {
      const values = expression.split("/");

      if (values.length !== 2) return this.falseWithError(CrontabValidator.ERROR.WRONG_EXPRESSION);

      if (this.filterInt(values[0]) >= this.filterInt(values[1]))
        return this.falseWithError(CrontabValidator.ERROR.WRONG_EXPRESSION);

      if (this.testMonth(values[0])) return testLimit(values[1]);
    }

    if (expression.includes("-")) {
      const values = expression.split("-");

      if (values.length !== 2) return this.falseWithError(CrontabValidator.ERROR.WRONG_EXPRESSION);

      if (this.testMonth(values[0])) return testLimit(values[1]);

      return this.falseWithError(CrontabValidator.ERROR.MONTH.OUT_OF_RANGE);
    }

    if (expression.includes(",")) {
      const values = expression.split(",");

      if (!values.every((v) => this.testMonth(v))) return this.falseWithError(CrontabValidator.ERROR.WRONG_EXPRESSION);

      return true;
    }

    return testLimit(expression);
  }

  testDayOfWeek(expression: string) {
    if (expression === "") return this.falseWithError(CrontabValidator.ERROR.DAY_OF_WEEK.EMPTY);
    const testLimit = (_expr: string) => {
      if (this.testBoundaries(_expr, MONTHS_BOUNDARIES)) return true;
      if (DAYS_OF_WEEK.includes(_expr.toLowerCase())) return true;

      return this.falseWithError(CrontabValidator.ERROR.DAY_OF_WEEK.OUT_OF_RANGE);
    };

    if (expression === "*") {
      if (this.dayOfMonth === "*") return false;

      return true;
    }

    if (expression === "?") {
      if (this.dayOfMonth === "?") return false;

      return true;
    }

    if (expression.toLowerCase() === "l") return true;

    for (let i = 0; i < DAYS_OF_WEEK.length + 1; i++) {
      if (expression.toLowerCase() === `${i}l`) {
        return true;
      }
    }

    if (expression.includes("#")) {
      const values = expression.split("#").map((e) => this.filterInt(e));

      if (values.length !== 2) return this.falseWithError(CrontabValidator.ERROR.WRONG_EXPRESSION);

      if (isNaN(values[0]) || isNaN(values[1])) return this.falseWithError(CrontabValidator.ERROR.WRONG_EXPRESSION);

      if (values[0] < DAYS_OF_WEEK_BOUNDARIES[0] || values[0] > DAYS_OF_MONTH_BOUNDARIES[1])
        return this.falseWithError(CrontabValidator.ERROR.WRONG_EXPRESSION);

      if (values[1] < 0 || values[1] > 5) return this.falseWithError(CrontabValidator.ERROR.WRONG_EXPRESSION);

      return true;
    }

    if (expression.includes("/")) {
      const values = expression.split("/");

      if (values.length !== 2) return this.falseWithError(CrontabValidator.ERROR.WRONG_EXPRESSION);

      if (this.filterInt(values[0]) >= this.filterInt(values[1]))
        return this.falseWithError(CrontabValidator.ERROR.WRONG_EXPRESSION);

      if (this.testDayOfWeek(values[0])) return testLimit(values[1]);
    }

    if (expression.includes("-")) {
      const values = expression.split("-");

      if (values.length !== 2) return this.falseWithError(CrontabValidator.ERROR.WRONG_EXPRESSION);

      if (this.testDayOfWeek(values[0])) return testLimit(values[1]);

      return this.falseWithError(CrontabValidator.ERROR.DAY_OF_WEEK.OUT_OF_RANGE);
    }

    if (expression.includes(",")) {
      const values = expression.split(",");

      if (!values.every((v) => this.testMonth(v))) return this.falseWithError(CrontabValidator.ERROR.WRONG_EXPRESSION);

      return true;
    }

    return testLimit(expression);
  }

  testYear(expression: string) {
    if (expression === "") return this.falseWithError(CrontabValidator.ERROR.YEAR.EMPTY);
    // YEARS_BOUNDARIES[0] = new Date().getFullYear(); // Uncomment to validate actual year
    return this.testTime(expression, YEARS_BOUNDARIES, CrontabValidator.ERROR.YEAR.OUT_OF_RANGE);
  }

  private testTime(expression: string, boundaries: [number, number], errorMsg: string) {
    const testLimit = (_expr: string) => {
      if (this.testBoundaries(_expr, boundaries)) return true;

      return this.falseWithError(errorMsg);
    };

    if (expression === "*") return true;

    if (expression.includes("/")) {
      const values = expression.split("/");

      if (values.length !== 2) return this.falseWithError(CrontabValidator.ERROR.WRONG_EXPRESSION);

      if (this.filterInt(values[0]) >= this.filterInt(values[1]))
        return this.falseWithError(CrontabValidator.ERROR.WRONG_EXPRESSION);

      if (this.testTime(values[0], boundaries, errorMsg)) return testLimit(values[1]);

      return this.falseWithError(CrontabValidator.ERROR.WRONG_EXPRESSION);
    }

    if (expression.includes("-")) {
      const values = expression.split("-");

      if (values.length !== 2) return this.falseWithError(CrontabValidator.ERROR.WRONG_EXPRESSION);

      if (this.testTime(values[0], boundaries, errorMsg)) return testLimit(values[1]);
      return this.falseWithError(CrontabValidator.ERROR.WRONG_EXPRESSION);
    }

    if (expression.includes(",")) {
      const values = expression.split(",");

      if (!values.every((v) => this.testTime(v, boundaries, errorMsg))) return this.falseWithError(errorMsg);

      return true;
    }

    return testLimit(expression);
  }

  private testBoundaries(v: string, [min, max]: [number, number]): boolean {
    return this.filterInt(v) >= min && this.filterInt(v) <= max;
  }

  private falseWithError(error: string) {
    this._errors.push(error);
    return false;
  }

  private filterInt(value: string): number {
    if (/^[-+]?(\d+|Infinity)$/.test(value)) {
      return Number(value);
    } else {
      return NaN;
    }
  }
}

// TO TEST
// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// promptExpression();

// function promptExpression() {
//   return readline.question("test quartz expression: ", (answer: string) => {
//     const cronValidator = new CrontabValidator();
//     console.log(cronValidator.test(answer));

//     promptExpression();
//   });
// }
