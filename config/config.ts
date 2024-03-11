import { defineConfig } from '@umijs/max';
import proxy from './proxy';
import routes from './routes';

const path = require('path');

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '有趣的灵魂',
    locale: false,
  },
  proxy,
  routes: routes,
  npmClient: 'pnpm',
  theme: {
    // '@primary-color': '#1890ff',
    'root-entry-name': 'variable',
    primaryColor: '#25b864',
  },
  alias: {
    '@config': path.resolve('./config'),
    '@public': path.resolve('./public'),
  },
});
