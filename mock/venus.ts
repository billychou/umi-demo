import { defineMock } from "@umijs/max";

export default defineMock({
    'GET /api/venus/v1/local/user/queryAll': (req, res) => {
        const userNameList = ["周林", "陈帅", "明光", "东东", "小红", "小丽丽"];
        const nickNameList = ["提昂", "逍遥子", "风清扬", "一号位"];
        const tablesListDataSource = [];
        for (let i = 0; i < 40; i += 1) {
            tablesListDataSource.push({
                id: i,
                userName: userNameList[Math.floor(Math.random() * userNameList.length)],
                nickName: nickNameList[Math.floor(Math.random() * nickNameList.length)],
                userGroupNameRefs: [],
                userGroupIdRefs: [],
                createTime: new Date().getTime(),
                updateTime: new Date().getTime(),
                createUser: "admin",
                updateUser: "admin",
                contact: null
            });
        };

        res.status(200).json({
            success: true,
            msg: "成功",
            data: tablesListDataSource,
        });
    }
});