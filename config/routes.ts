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
        name: '样例',
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
            }
       ]
    },
    {
        name: '系统设置',
        path: '/settings',
        routes: [
            {
                name: '用户管理',
                path: '/settings/user',
                component: './Alert/Users',
            }
        ]
    },
    {
        name: '权限演示',
        path: '/access',
        component: './Access',
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: './Table',
    },
    {
        name:  'example',
        path: '/example',
        component: './Example/proxy_demo'
    }
];