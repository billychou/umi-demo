import { defineMock } from "@umijs/max";

export default defineMock({
    'GET /api/users': [
        {id: 1, name: 'foo'},
        {id: 2, name: 'bar'}
    ],
    'GET /api/users/1': {
        id: 1, 
        name: 'foo'
    },
    'POST /user/login': {
        success: true,
        message: "success",
        data: []
    },

    'POST /api/users/create': (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end('ok');
    },

    'GET /api/user/getUserData': (req, res) => {
        res.status(200).json({id:2, name:'bar'});
    },
    'GET /api/users/getCurrentUser': (req, res) => {
        res.status(200).json({
            userid: "002436",
            username: "admin",
            nickname: "admin",
            menu: [
                {
                    path: "/",
                    name: "首页"
                },
                {
                    path: "/demo",
                    name: "产品管理",
                    routes: [
                        {
                            path: '/demo/ref',
                            name: '产品哈哈'
                        },
                        {
                            path: '/demo/tree',
                            name: '产品列表',
                        }
                    ]
                }
            ]
        });
    }
});