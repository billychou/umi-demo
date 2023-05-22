import { history } from 'umi';
import {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';

interface InitialState {
  username: string;
  nickname: string;
  currentUser: string;
}

export async function getInitialState() {
  /**
   * 获取初始状态
   */
  const msg = {
    username: 'admin',
    nickname: 'admin',
    currentUser: 'admin',
  };
  return msg;
}

export const layout = ({ initialState }): BasicLayoutProps => {
  return {
    onPageChange: () => {
      const { currentUser } = initialState;
      console.error(currentUser);
      const { location } = history;
      // 如果没有登录，重定向到login
      if (!currentUser && location.pathname !== '/user/login') {
        history.push('/user/login');
      }
    },
    menuHeaderRender: undefined,
  };
};
