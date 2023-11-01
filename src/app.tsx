// 运行时配置
import { RequestConfig, RunTimeLayoutConfig } from "@umijs/max";
import { getCurrentUser } from "./services/demo/UserController";

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
 * global request config
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

/**
 * runtime layout config 
 * @param param0 
 * @returns 
 */
export const layout: RunTimeLayoutConfig = ({initialState, setInitialState}) => {
  return {
    title: '有趣的灵魂',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    //menu: {
    //  locale: false,
    //  params: {},
    //  request: async () => {
    //    // const menuData = initialState?.currentUser?.menu;
    //    // return  menuData;
    //  }
    //},
    childrenRender: (children) => {
      return (<>{children}</>)
    }
  };
};
