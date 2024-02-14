export default [
  {
    path: '/',
    name: '首页',
    component: './Home',
    icon: 'HomeOutlined',
  },
  {
    layout: false,
    path: '/tuliu',
    component: './Tuliu',
  },
  {
    name: '日历',
    path: '/calendar',
    component: './Home/components/calendarDemo',
    icon: 'CalendarOutlined',
  },
  {
    name: '监控趋势图',
    path: '/trade',
    component: './Home/components/metricLine',
    icon: 'LineChartOutlined',
  },
  {
    layout: false,
    path: '/backend',
    component: './Demo/styled_component_demo',
  },
  {
    name: '表格',
    path: '/table',
    component: './Table',
  },
  {
    name: '告警列表',
    path: '/alert/list',
    component: './Alert/Users',
  },
  {
    name: '基础类型',
    path: '/basic',
    component: './Basic',
  },
  {
    name: '色彩',
    path: '/color',
    component: './Demo/Color',
  },
  {
    name: '样式',
    path: '/style',
    component: './Demo/AntdStyleDemo',
  },
  {
    name: '组件',
    path: '/demo',
    icon: 'ZoomInOutlined',
    routes: [
      {
        name: '布局',
        path: '/demo/layout',
        component: './Demo/LayoutDemo',
      },
      {
        name: 'G2',
        path: '/demo/g2',
        component: './Demo/g2_demo',
      },
      {
        name: 'Context',
        path: '/demo/context',
        component: './Demo/ContextDemo',
      },
      {
        name: 'State',
        path: '/demo/state',
        component: './Demo/StateDemo',
      },
      {
        name: 'search',
        path: '/demo/search',
        component: './Demo/UseSearchParamsDemo',
      },
      {
        name: 'FunctionComponet',
        path: '/demo/function',
        component: './Example/FunctionComponent',
      },
      {
        name: 'style-components',
        path: '/demo/style',
        component: './Demo/styled_component_demo',
      },
    ],
  },
  {
    name: '登录',
    layout: false,
    path: '/login',
    component: './Login',
  },
];
