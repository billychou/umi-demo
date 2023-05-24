import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '三分地管理平台',
  },
  routes: routes, 
  npmClient: 'pnpm',
});
