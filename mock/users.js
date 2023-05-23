export default {
    'GET /api/users': [
        {id: 1, name: 'foo'},
        {id: 2, name: 'bar'}
    ],
    'GET /api/users/1': {
        id: 1, 
        name: 'foo'
    },
    'GET /api/user/getCurrentUser': {
        id: 1, 
        name: 'foo',
        nickname: 'foo',  
        menus: []
    },
    'POST /user/login': {
        success: true,
        message: "success",
        data: []
    },

    'POST /api/users/create': (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end('ok');
    }
}