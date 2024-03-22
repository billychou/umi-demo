import { message } from "antd";
import cache from "memory-cache";

const time = 2000;

const messages = {};

const except = ["没有权限，请联系管理员"];

messages.success = (...arg) => {
  if (!cache.get(arg[0])) {
    if (!except.includes(arg[0])) cache.put(arg[0], true, time);
    message.success(arg);
  }
};
messages.error = (...arg) => {
  if (!cache.get(arg[0])) {
    if (!except.includes(arg[0])) cache.put(arg[0], true, time);
    message.error(arg);
  }
};
messages.info = (...arg) => {
  if (!cache.get(arg[0])) {
    if (!except.includes(arg[0])) cache.put(arg[0], true, time);
    message.info(arg);
  }
};
messages.warning = (...arg) => {
  if (!cache.get(arg[0])) {
    if (!except.includes(arg[0])) cache.put(arg[0], true, time);
    message.warning(arg);
  }
};
messages.warn = (...arg) => {
  if (!cache.get(arg[0])) {
    if (!except.includes(arg[0])) cache.put(arg[0], true, time);
    message.warn(arg);
  }
};
messages.loading = (...arg) => {
  if (!cache.get(arg[0])) {
    if (!except.includes(arg[0])) cache.put(arg[0], true, time);
    return message.loading(arg);
  }
};

export default messages;
