import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '有趣的灵魂',
  },
  routes: routes, 
  npmClient: 'pnpm',
});
