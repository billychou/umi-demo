export default [
    {
        path: '/',
        name: "首页",
        component: './Home',
        icon: 'HomeOutlined',
    },
    {
        name: "日历",
        path: '/calendar',
        component: './Home/components/calendarDemo',
        icon: 'CalendarOutlined',
    },
    {
        name: "监控趋势图",
        path: '/trade',
        component: './Home/components/metricLine',
        icon: 'LineChartOutlined',
    },
    {
        name: "Demo",
        path: "/demo",
        icon: "ZoomInOutlined",
        routes: [
            {
                name: "G2",
                path: "/demo/g2",
                component: "./Demo/g2_demo",
            },
            {
                name: "Context",
                path: "/demo/context",
                component: "./Demo/ContextDemo",
            },
            {
                name: "State",
                path: "/demo/state",
                component: "./Demo/StateDemo"
            }
        ]
    },
];