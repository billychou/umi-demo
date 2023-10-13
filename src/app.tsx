// 运行时配置

import { RequestConfig, RunTimeLayoutConfig } from "@umijs/max";
import { getCurrentUser } from "./services/demo/UserController";
import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: 'react app',
    entry: '//localhost:7001',
    container:  '#yourContainer',
    activeRule: '/yourActiveRule'
  }
]);
start();

export interface CurrentUser {
  userid?: string;
  username?: string;
  nickname?: string;
}

export interface InitialState {
  name?: string;
  currentUser?: CurrentUser;
}

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

/**
 * 运行时配置，为项目进行统一的个性化的请求设定
 */
export const request: RequestConfig = {
  timeout: 1000,
  errorConfig: {
    errorHandler() {

    },
    errorThrower() {

    }
  },
  requestInterceptors: [],
  responseInterceptors: []
}

export const layout: RunTimeLayoutConfig = ({initialState}) => {
  return {
    title: '有趣的灵魂',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
      params: {
        userId: initialState?.currentUser?.userid  
      },
      request: async (params, defaultMenuData) => {
        // const menuData = await getCurrentUser();
        const menuData = initialState?.currentUser?.menu;
        return menuData;
      }
    },
    // menuDataRender: (menuItems) => {
    //   const menuData = initialState?.currentUser?.menu;
    //   return menuData; 
    // }
  };
};
