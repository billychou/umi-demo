export default [
  {
    path: '/',
    name: '首页',
    component: './Landing',
  },
  {
    path: '/app',
    name: '应用中心',
    component: './App',
  },
  {
    path: '/resource',
    name: '资源中心',
    component: './Resource',
  },
  {
    layout: false,
    path: '/tuliu',
    component: './Tuliu',
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
    name: '工具',
    path: '/tools',
    routes: [
      {
        name: 'GetRef',
        path: '/tools/getref',
        component: './Tools/GetRefDemo',
      },
    ],
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
        name: '日历',
        path: '/demo/calendar',
        component: './Home/components/calendarDemo',
        icon: 'CalendarOutlined',
      },
      {
        name: '表格',
        path: '/demo/table',
        component: './Table',
      },
      {
        name: 'dayjs',
        path: '/demo/day',
        component: './Demo/DayjsDemo',
      },
      {
        name: 'ProComponents样式',
        path: '/demo/procomponents',
        component: './Demo/ProDemo',
      },
      {
        name: 'React文档',
        path: '/demo/react',
        component: './Demo/ReactDocDemo',
      },
      {
        name: '栅格布局',
        path: '/demo/grid',
        component: './Demo/GridDemo',
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
