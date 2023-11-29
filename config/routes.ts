import { patchAtBootstrapping } from "qiankun/es/sandbox/patchers";

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
    // {
    //     name: "ref",
    //     path: '/demo/ref',
    //     component: './Demo/ref_demo'
    // },
    // {
    //     name: "tree",
    //     path: '/demo/tree',
    //     component: './Demo/state_tree'
    // },
    // {
    //     name: "feedback",
    //     path: '/demo/feedback',
    //     component: './Demo/state_feedback_form' 
    // },
    // {
    //     name: "canvas",
    //     path: '/demo/canvas',
    //     component: './Demo/canvas'
    // },
    // {
    //     name: "antv",
    //     path: "/demo/antv",
    //     component: "./Demo/antv"
    // }
    //{
    //    path: '/demo',
    //    routes: [
    //        {
    //            path: "/demo/ref",
    //            component: './Demo/ref_demo'
    //        },
    //        {
    //            path: "/demo/state",
    //            component: './Demo/state_demo'
    //        },
    //        {
    //            path: "/demo/tree",
    //            component: './Demo/state_tree'
    //        },
    //        {
    //            path: "/demo/feedback",
    //            component: './Demo/state_feedback_form'
    //        },
    //        {
    //            path: "/demo/canvas",
    //            component: "./Demo/canvas"
    //        },
    //        {
    //            path: "/demo/demo",
    //            component: "./Demo/effect_demo",
    //        }
    //   ]
    //},
    //{
    //    path: '/about',
    //    routes: [
    //        {
    //            path: "/about/server",
    //            component: './Home'
    //        }, 
    //        {
    //            path: "/about/qualinity",
    //            component: './Home'
    //        },
    //        {
    //            path: "/about/schedule",
    //            component: './Home'
    //        } 
    //    ]
    //},
    //{
    //    path: '/settings',
    //    routes: [
    //        {
    //            path: '/settings/user',
    //            component: './Alert/Users',
    //        }
    //    ]
    //},
];