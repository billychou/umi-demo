import { defineMock } from '@umijs/max';

export default defineMock({
  'GET /api/venus/v1/local/user/queryAll': (req, res) => {
    const userNameList = ['周林', '陈帅', '明光', '东东', '小红', '小丽丽'];
    const nickNameList = ['提昂', '逍遥子', '风清扬', '一号位'];
    const genderList = [0, 1];
    const tablesListDataSource = [];
    for (let i = 0; i < 1000; i += 1) {
      tablesListDataSource.push({
        id: i,
        userName: userNameList[Math.floor(Math.random() * userNameList.length)],
        nickName: nickNameList[Math.floor(Math.random() * nickNameList.length)],
        age: Math.floor(Math.random() * 100),
        gender: genderList[Math.floor(Math.random() * genderList.length)],
        email: `123456789@qq.com`,
        phone: `1${Math.random() * 10000000}`,
        address: '上海市',
        remark: '备注',
        status: Math.floor(Math.random() * 2),
        userGroup: null,
        userGroupNameRefs: [],
        userGroupIdRefs: [],
        createTime: new Date().getTime(),
        updateTime: new Date().getTime(),
        createUser: 'admin',
        updateUser: 'admin',
        contact: null,
      });
    }

    tablesListDataSource.push({
      id: 400,
      userName: '周林',
      nickName: '提昂',
      age: 'test',
      gender: 0,
      email: `123456789@qq.com`,
      phone: `1${Math.random() * 10000000}`,
      address: '上海市',
      remark: '备注',
    });

    tablesListDataSource.push({
      id: 410,
      userName: '周林',
      nickName: '提昂',
      age: 'hello',
      gender: 0,
      email: `123456789@qq.com`,
      phone: `1${Math.random() * 10000000}`,
      address: '上海市',
      remark: '备注',
    });

    tablesListDataSource.push({
      id: 420,
      userName: '周林',
      nickName: '提昂',
      age: 108,
      gender: 0,
      email: `123456789@qq.com`,
      phone: `1${Math.random() * 10000000}`,
      address: '上海市',
      remark: '备注',
    });

    res.status(200).json({
      success: true,
      msg: '成功',
      data: tablesListDataSource,
    });
  },
});
