// 运行时配置
import React from 'react';
import settings from "@config/settings";
import {ConfigProvider, message} from "antd";
import { RequestConfig, RequestOptions, RunTimeLayoutConfig } from "@umijs/max";
import { getCurrentUser } from "./services/demo/UserController";
import type { RuntimeConfig } from "@umijs/max";

interface menuData {
  name?: string;
  path?: string;
}

export interface CurrentUser {
  userid?: string;
  username?: string;
  nickname?: string;
  menu?: menuData[];
}

export interface InitialState {
  name?: string;
  currentUser?: CurrentUser;
}


// ConfigProvider.config({
//   prefixCls: settings.antPrefix,
//   theme: {
//     primaryColor: "#197dff",
//     errorColor: "#F5222D",
//     warningColor: "#FAAD14",
//     successColor: "#52C41A",
//     infoColor: "#197dff",
//   },
// });

// export const layoutActionRef = createRef<{reload: ()=>void}>();
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<InitialState> {
  // 获取当前用户信息
  const currentUser = await getCurrentUser();
  return { 
    name: 'sanfendi',
    currentUser: currentUser,
  };
}

const authRequestHeaderInterceptor = (url: string , options: RequestOptions) => {
  let _url = url.concat("?token=123456");
  return {
    url: _url, 
    options: {
      ...options,
      headers: {token: "token", ...options?.headers}
    }
  }
}

const resInterceptor = (response: any) => {
  if (response.status === 200) {
    let result = response.data;
    if (result.code > 0 && result.code < 10000) {
      message.error(result.msg);
    } else if (result.code >= 10000) {
      message.warning(result.msg);
    }
  }
  return response;
}

/**
 * global request config
 */
export const request: RequestConfig = {
  timeout: 5000,
  errorConfig: {
    errorHandler() {
    },
    errorThrower() {
    }
  },
  requestInterceptors: [authRequestHeaderInterceptor],
  responseInterceptors: [resInterceptor]
}


/**
 * runtime layout config 
 * @param initialState
 * @returns 
 */
export const layout: RunTimeLayoutConfig = ({initialState, setInitialState}) => {
  return {
    title: '有趣的灵魂',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    siderWidth: 150,
    childrenRender: (children) => {
      return (<>{children}</>)
    }
  };
};
