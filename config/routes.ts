import { patchAtBootstrapping } from "qiankun/es/sandbox/patchers";

export default [
    {
        path: '/',
        component: './Home',
    },
    {
        path: '/demo/ref',
        component: './Demo/ref_demo'
    },
    {
        path: '/demo/tree',
        component: './Demo/state_tree'
    },
    {
        path: '/demo/feedback',
        component: './Demo/state_feedback_form' 
    }
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