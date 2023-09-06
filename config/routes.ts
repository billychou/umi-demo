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
                name: "ref",
                path: "/demo/ref",
                component: './Demo/ref_demo'
            },
            {
                name: "state",
                path: "/demo/state",
                component: './Demo/state_demo'
            },
            {
                name: "tree",
                path: "/demo/tree",
                component: './Demo/state_tree'
            },
            {
                name: "feedback",
                path: "/demo/feedback",
                component: './Demo/state_feedback_form'
            },
            {
                name: "canvas",
                path: "/demo/canvas",
                component: "./Demo/canvas"
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