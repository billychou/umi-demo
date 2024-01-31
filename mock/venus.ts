import { defineMock } from "@umijs/max";

export default defineMock({
    'GET /api/venus/v1/local/user/queryAll': (req, res) => {
        res.status(200).json({
            success: true,
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
                    id: 2,
                    userName: "002436",
                    userGroupNameRefs: [],
                    userGroupIdRefs: [],
                    nickName: "周松川",
                    contact: null,
                    createTime: 1685369120931,
                    updateTime: 1685369120931,
                    createUser: "[system]",
                    updateUser: "[system]"
                },
                {
                    id: 3,
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
                    id: 4,
                    userName: "002436",
                    userGroupNameRefs: [],
                    userGroupIdRefs: [],
                    nickName: "周松川",
                    contact: null,
                    createTime: 1685369120931,
                    updateTime: 1685369120931,
                    createUser: "[system]",
                    updateUser: "[system]"
                },
                {
                    id: 5,
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
                    id: 6,
                    userName: "002436",
                    userGroupNameRefs: [],
                    userGroupIdRefs: [],
                    nickName: "周松川",
                    contact: null,
                    createTime: 1685369120931,
                    updateTime: 1685369120931,
                    createUser: "[system]",
                    updateUser: "[system]"
                },
                {
                    id: 7,
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
                    id: 8,
                    userName: "002436",
                    userGroupNameRefs: [],
                    userGroupIdRefs: [],
                    nickName: "周松川",
                    contact: null,
                    createTime: 1685369120931,
                    updateTime: 1685369120931,
                    createUser: "[system]",
                    updateUser: "[system]"
                },
                {
                    id: 9,
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
                    id: 10,
                    userName: "002436",
                    userGroupNameRefs: [],
                    userGroupIdRefs: [],
                    nickName: "周松川",
                    contact: null,
                    createTime: 1685369120931,
                    updateTime: 1685369120931,
                    createUser: "[system]",
                    updateUser: "[system]"
                },
                {
                    id: 11,
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
                    id: 12,
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