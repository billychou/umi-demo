import { patchAtBootstrapping } from "qiankun/es/sandbox/patchers";

export default [
    {
        path: '/',
        redirect: '/home',
    },
    {
        name: '首页',
        path: '/home',
        component: './Home',
    },
    {
        name: '可视化',
        path: '/demo',
        routes: [
            {
                name: "计算机图形学",
                path: "/demo/ref",
                component: './Demo/ref_demo'
            },
            {
                name: "渲染",
                path: "/demo/state",
                component: './Demo/state_demo'
            },
            {
                name: "动画",
                path: "/demo/tree",
                component: './Demo/state_tree'
            },
            {
                name: "机器学习",
                path: "/demo/feedback",
                component: './Demo/state_feedback_form'
            },
            {
                name: "人工智能",
                path: "/demo/canvas",
                component: "./Demo/canvas"
            },
            {
                name: "demo",
                path: "/demo/demo",
                component: "./Demo/effect_demo",
            }
       ]
    },
    {
        name: '服务端',
        path: '/about',
        routes: [
            {
                name: "服务端",
                path: "/about/server",
                component: './Home'
            }, 
            {
                name: "量化交易",
                path: "/about/qualinity",
                component: './Home'
            },
            {
                name: "调度中心",
                path: "/about/schedule",
                component: './Home'
            } 
        ]
    },
    {
        name: '系统管理',
        path: '/settings',
        routes: [
            {
                name: '用户管理',
                path: '/settings/user',
                component: './Alert/Users',
            }
        ]
    },
];