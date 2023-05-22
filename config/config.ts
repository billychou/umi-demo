import { defineConfig } from 'umi';
import routes from './routes';

export const config = defineConfig({
  layout: {
    name: 'demo',
    locale: false,
    layout: 'side',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
});
