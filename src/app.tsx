// 运行时配置

import { RunTimeLayoutConfig } from "@umijs/max";
import { createRef } from "react";

export interface CurrentUser {
  userid: string;
  name: string;
  nickname: string;
}

export interface InitialState {
  name: string;
  currentUser: CurrentUser;
}


// export const layoutActionRef = createRef<{reload: ()=>void}>();
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<InitialState> {
  // 获取当前用户信息
  return { 
    name: 'sanfendi',
    currentUser: {
      userid: '002436',
      name: "admin",
      nickname: "admin"
    }
  };

}

export const layout: RunTimeLayoutConfig = ({initialState}) => {
  return {
    title: '三分地管理平台',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
      // params: {
      // userId: initialState?.currentUser?.userid,
      // },
      // actionRef: layoutActionRef,
      // reuqest: async (params, defaultMenuData) => {
      // },
    },
  };
};