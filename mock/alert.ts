import { defineMock } from "@umijs/max";

export default defineMock({
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
});