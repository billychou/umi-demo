import fp from "lodash/fp";
import moment from "moment";

// 时间戳转换成文字
export const time2Str = (time?: number, format = "YYYY-MM-DD HH:mm:ss") => {
  return !time ? "" : moment(time).format(format);
};

/**
 * 分钟转换为 n天n小时n分钟
 */
export function showMinutes2Day(minutes?: number | null) {
  return fp.flow(
    (n: number) => [{ value: n, unit: "分钟" }],
    converter(60, "小时"),
    converter(24, "天"),
    showUnitString
  )(minutes ?? 0);
}

/**
 * 时间戳转换为 n分n秒, 可以设置默认值，默认值的默认值0秒
 */
export function showT2MByDefaultText(
  timestamp?: number | null,
  defaultText?: string
) {
  return showTimestamp2Minute(timestamp) || defaultText || "0秒";
}

/**
 * 时间戳转换为 n分n秒
 * 秒数四舍五入
 */
export function showTimestamp2Minute(timestamp?: number | null) {
  return fp.flow(
    (t) => Math.round(t / 1000),
    genMinute,
    converter(60, "分钟"),
    showUnitString
  )(timestamp ?? 0);
}

/**
 * 时间戳转换为 n分n秒
 * 秒数向上取整
 */
export function showTimestampUp2Minute(timestamp?: number | null) {
  return fp.flow(
    (t) => Math.ceil(t / 1000),
    genMinute,
    converter(60, "分"),
    showUnitString
  )(timestamp ?? 0);
}

function showUnitString(arr: TimeArr[]) {
  return arr
    .map(({ value, unit }) => (value > 0 ? `${value}${unit}` : ""))
    .filter((s) => s !== "")
    .join("");
}

interface TimeArr {
  value: number;
  unit: string;
}
function genMinute(n?: number): [TimeArr] {
  return [{ value: n ?? 0, unit: "秒" }];
}
function converter(scale: number, unit: string) {
  return (arr: TimeArr[]): TimeArr[] => {
    const [data, ...restArr] = arr;
    return [
      {
        value: Math.floor(data.value / scale),
        unit: unit,
      },
      {
        value: data.value % scale,
        unit: data.unit,
      },
      ...restArr,
    ];
  };
}
