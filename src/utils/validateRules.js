export default {
  // 必填字段
  required: { required: true },

  // 字符串长度限制
  stringLength: (num, option) => ({ type: "string", max: num, ...option }),

  // 常规字段
  spaceStart: {
    pattern: /^(?!\s)/,
    message: "首位不要输入空格",
  },

  // 常规字段
  normalField: {
    pattern: /^[\u4e00-\u9fa5A-Za-z0-9_-]+$/g,
    message: "请输入中文、英文、数字、下划线和短横线",
  },

  // 接入ref字段
  inputRefField: {
    pattern: /^[\u4e00-\u9fa5A-Za-z0-9_\-${},:;.。\s]+$/g,
    message: "请输入中文、英文、数字、空格和_-${},:;.。",
  },
  // 丰富ref字段
  richRefField: {
    pattern: /^[\u4e00-\u9fa5A-Za-z0-9_\-#${},:;.。\s]+$/g,
    message: "请输入中文、英文、数字、空格和_-#${},:;.。",
  },

  // 常规字段
  refField: {
    pattern: /^[\u4e00-\u9fa5A-Za-z0-9_\-#${}]+$/g,
    message: "请输入中文、英文、数字和_-#${}",
  },

  // 常规英文字段
  normalEnField: {
    pattern: /^[A-Za-z0-9_-]+$/g,
    message: "请输入英文、数字、下划线和短横线",
  },

  // 常规字符
  normalText: {
    validator(_, value, callback) {
      // const reg = new RegExp(
      //   '[`~$%^&()+=|<>~￥%……&（）+|【】‘；”“’。，、？\\S+]|javascript:|script|eval((.*))|%3C|%3E|',
      // );
      const reg = /[`~$%^&()+=|<>~￥%……&（）+|【】‘；”“’。，、？]|javascript:|script|eval\((.*)\)|%3C|%3E/; // `
      if (value && reg.test(value)) {
        callback("包含特殊字符");
        return;
      }
      callback();
    },
  },

  // 判断是否列表中已存在
  ifInList: ({ list, message }) => ({
    validator(_, value) {
      const hasItem = list?.includes(value);
      if (hasItem) {
        return Promise.reject(new Error(message));
      }
      return Promise.resolve();
    },
  }),
};
