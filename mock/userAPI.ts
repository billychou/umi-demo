import { defineMock } from '@umijs/max';

const users = [
  { id: 0, name: 'Umi', nickName: 'U', gender: 'MALE' },
  { id: 1, name: 'Fish', nickName: 'B', gender: 'FEMALE' },
];

export default defineMock({
  'POST /api/v1/user': (req, res) => {
    res.status(200).json({
      success: true,
      errorCode: 0,
    });
  },

  'GET /api/v1/queryUserList': (req, res) => {
    res.status(200).json({
      success: true,
      errorCode: 0,
      data: [
        {
          id: 0,
          name: 'Umi',
          nickName: 'U',
          gender: 'MALE',
        },
        {
          id: 1,
          name: 'Fish',
          nickName: 'B',
          gender: 'FEMALE',
        },
        {
          id: 0,
          name: 'Umi',
          nickName: 'U',
          gender: 'MALE',
        },
        {
          id: 2,
          name: 'Fish',
          nickName: 'B',
          gender: 'FEMALE',
        },
        {
          id: 3,
          name: 'Umi',
          nickName: 'U',
          gender: 'MALE',
        },
        {
          id: 4,
          name: 'Fish',
          nickName: 'B',
          gender: 'FEMALE',
        },
        {
          id: 5,
          name: 'Umi',
          nickName: 'U',
          gender: 'MALE',
        },
        {
          id: 6,
          name: 'Fish',
          nickName: 'B',
          gender: 'FEMALE',
        },
        {
          id: 7,
          name: 'Umi',
          nickName: 'U',
          gender: 'MALE',
        },
        {
          id: 8,
          name: 'Fish',
          nickName: 'B',
          gender: 'FEMALE',
        },
        {
          id: 9,
          name: 'Umi',
          nickName: 'U',
          gender: 'MALE',
        },
        {
          id: 10,
          name: 'Fish',
          nickName: 'B',
          gender: 'FEMALE',
        },
        {
          id: 11,
          name: 'Umi',
          nickName: 'U',
          gender: 'MALE',
        },
        {
          id: 12,
          name: 'Fish',
          nickName: 'B',
          gender: 'FEMALE',
        },
        {
          id: 13,
          name: 'Umi',
          nickName: 'U',
          gender: 'MALE',
        },
        {
          id: 14,
          name: 'Fish',
          nickName: 'B',
          gender: 'FEMALE',
        },
        {
          id: 15,
          name: 'Umi',
          nickName: 'U',
          gender: 'MALE',
        },
        {
          id: 16,
          name: 'Fish',
          nickName: 'B',
          gender: 'FEMALE',
        },
        {
          id: 17,
          name: 'Umi',
          nickName: 'U',
          gender: 'MALE',
        },
        {
          id: 18,
          name: 'Fish',
          nickName: 'B',
          gender: 'FEMALE',
        },
      ],
    });
  },
});
