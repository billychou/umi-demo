// 运行时配置
import settings from "@config/settings";
import { RequestConfig, RequestOptions, RunTimeLayoutConfig } from "@umijs/max";
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

const authRequestHeaderInterceptor = (url: string , options: RequestOptions) => {
  let _url = url.concat("?token=123456");
  console.log(settings.appCode);
  return {
    url: _url, 
    options: {
      ...options,
      headers: {token: "token", ...options?.headers}
    }
  }
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
    siderWidth: 150,
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
