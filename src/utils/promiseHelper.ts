import type { ISafeRespose } from "@/utils/safeRequest";

/**
 * 转换接口返回结果，适用于ahooks的usePagination
 */
export function convert2Pagination<T extends ISafeRespose<any>>(res: T) {
  let total = 0;
  let list = [];
  if (res.code === 0) {
    total = res.data.totalCount;
    list = res.data.lists;
  }
  return {
    total,
    list,
  };
}

/**
 * 转换接口返回结果，异常打印信息
 */
export const convertResponse =
  <T extends ISafeRespose<any>>(apiPath?: string) =>
  (res: T) => {
    if (res.code === 0) {
      return res;
    }
    if (apiPath) {
      // eslint-disable-next-line no-console
      console.error(`error api: ${apiPath}`, res);
    }
    return false;
  };

/**
 * code非零抛出异常
 */
export const throwWithNonZero = <T extends ISafeRespose<any>>(res: T) => {
  if (res.code !== 0) throw new Error(res.msg);
  return res;
};

/**
 * 捕获异常并打印
 */
export const printErrorWith = function (name: string, callback?: () => void) {
  return (err: any) => {
    // eslint-disable-next-line no-console
    console.error(`catch error with ${name}:`, err);
    callback?.();
  };
};
