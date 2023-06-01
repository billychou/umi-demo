import { defineMock } from "@umijs/max";

export default defineMock({
    'GET /api/venus/v1/local/user/queryAll': (req, res) => {
        res.status(200).json({
            code: 0,
            msg: "成功",
            data: [
                {
                    id: 1,
                    userName: "002306",
                    userGroupNameRefs: [],
                    userGroupIdRefs: [],
                    nickName: "周恒超",
                    createTime: 1685373527777,
                    updateTime: null,
                    createUser: "admin",
                    updateUser: null
                },
                {
                    id: 1,
                    userName: "002436",
                    userGroupNameRefs: [],
                    userGroupIdRefs: [],
                    nickName: "周松川",
                    contact: null,
                    createTime: 1685369120931,
                    updateTime: 1685369120931,
                    createUser: "[system]",
                    updateUser: "[system]"
                }
            ],
        });
    }
});