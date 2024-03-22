import message from "@/utils/message";
import type { RequestConfig } from "@umijs/max";
import { request } from "@umijs/max";

/**
 * option扩展
 */
export interface ISafeRequestOption<T = any> extends RequestConfig {
  /**
   * 成功时弹出消息
   */
  successMessage?: string | ((d: ISafeRespose<T>) => string);
  /**
   * 失败时弹出消息
   */
  errorMessage?: string;
  /**
   * 失败时禁止弹出消息
   */
  hideErrorMessage?: boolean;
}

/**
 * option扩展，含id
 */
export interface ISafeRequestOptionHasId<T = any, U = number | string> extends ISafeRequestOption<T> {
  id: U;
}

/**
 * 接口返回值封装
 */
export interface ISafeRespose<T> {
  isOk: boolean;
  isFailed: boolean;
  code: number;
  msg: string;
  data: T;
}

/**
 * 安全的网络请求
 * 已经捕获catch异常处理
 */
export default function <T = any>(
  /**
   * 网络请求地址
   */
  url: string,
  { successMessage, errorMessage, hideErrorMessage, ...option }: ISafeRequestOption<T>
) {
  return new Promise<ISafeRespose<T>>((resolve) => {
    // console.log('request req', url, option);
    try {
      request<ISafeRespose<T>>(url, option)
        .then((res) => {
          // console.log('request res', res);
          if (res?.code === 0) {
            const msg = typeof successMessage === "function" ? successMessage(res) : successMessage;
            if (msg) {
              message.success(msg);
            }
            resolve(addStateProp(res, true));
          } else {
            if (!hideErrorMessage) {
              // eslint-disable-next-line no-console
              console.error(`error url: ${url}`, res);
            }
            resolve(addStateProp(res, false));
          }
        })
        .catch((err) => {
          if (!hideErrorMessage) {
            // eslint-disable-next-line no-console
            console.error(`error url: ${url}`, err);
          }
          // @ts-ignore
          resolve(addStateProp({ err: err }, false));
        });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn("safeRequest catch err", err);
      if (!hideErrorMessage) {
        message.warning(errorMessage || "程序异常！");
      }
      // @ts-ignore
      resolve(addStateProp({ err: err }, false));
    }
  });
}

function addStateProp<T>(res: T, state: boolean): T {
  return {
    ...res,
    isOk: state,
    isFailed: !state,
  };
}
