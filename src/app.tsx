// 运行时配置
import { RequestConfig, RequestOptions, RunTimeLayoutConfig } from '@umijs/max';
import { Input, message } from 'antd';
import React from 'react';
import { getCurrentUser } from './services/demo/UserController';

const { Search } = Input;

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

const MyInputSearch = () => {
  return (
    <Search
      placeholder="请输入关键字"
      onSearch={(value) => {
        console.log(value);
      }}
    ></Search>
  );
};

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

const authRequestHeaderInterceptor = (url: string, options: RequestOptions) => {
  let _url = url.concat('?token=123456');
  return {
    url: _url,
    options: {
      ...options,
      headers: { token: 'token', ...options?.headers },
    },
  };
};

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
};

/**
 * global request config
 */
export const request: RequestConfig = {
  timeout: 5000,
  errorConfig: {
    errorHandler() {},
    errorThrower() {},
  },
  requestInterceptors: [authRequestHeaderInterceptor],
  responseInterceptors: [resInterceptor],
};

/**
 * runtime layout config
 * @param initialState
 * @returns
 */
export const layout: RunTimeLayoutConfig = ({
  initialState,
  setInitialState,
}) => {
  return {
    title: '有趣的灵魂',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    pure: false, // 是否删除掉所有自带界面
    loading: false,
    siderWidth: 200,
    fixedHeader: true,
    actionsRender: (layoutProps) => [<MyInputSearch />],
    // headerRender: (props) => {
    //   return (
    //     <div>
    //       <div className="logo">logo</div>
    //       <div className="header">header</div>
    //     </div>
    //   );
    // },
    // headerContentRender: (props) => {
    //   return (
    //     <div>
    //       <div className="header">header</div>
    //     </div>
    //   );
    // },
    // rightRender: (props) => {
    //   return (
    //     <div>
    //       <div className="right render">right</div>
    //     </div>
    //   );
    // },
    // rightContentRender: (props) => {
    //   return (
    //     <div>
    //       <div className="right">right content render</div>
    //     </div>
    //   );
    // },
    childrenRender: (children) => {
      return <>{children}</>;
    },
    // menu: {
    //   type: 'group',
    // },
    // layout: 'side',
    // layout: 'top',
    layout: 'top',
    appList: [
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        title: 'Ant Design',
        desc: '杭州市较知名的 UI 设计语言',
        url: 'https://ant.design',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
        title: 'AntV',
        desc: '蚂蚁集团全新一代数据可视化解决方案',
        url: 'https://antv.vision/',
        target: '_blank',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
        title: 'Pro Components',
        desc: '专业级 UI 组件库',
        url: 'https://procomponents.ant.design/',
      },
      {
        icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
        title: 'umi',
        desc: '插件化的企业级前端应用框架。',
        url: 'https://umijs.org/zh-CN/docs',
      },

      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
        title: 'qiankun',
        desc: '可能是你见过最完善的微前端解决方案🧐',
        url: 'https://qiankun.umijs.org/',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
        title: '语雀',
        desc: '知识创作与分享工具',
        url: 'https://www.yuque.com/',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
        title: 'Kitchen ',
        desc: 'Sketch 工具集',
        url: 'https://kitchen.alipay.com/',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        desc: '为组件开发场景而生的文档工具',
        url: 'https://d.umijs.org/zh-CN',
      },
    ],
  };
};
