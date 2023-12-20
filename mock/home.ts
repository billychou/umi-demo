import { defineMock } from "@umijs/max";


export default defineMock({
    'GET /api/home': {
        success: true,
        message: null,
        data: [
            {
                id: 1,
                title: "中华人民共和国",
                logo: "",
                description: "中华人民共和国是一个位于东亚的社会主义国家[1]，成立于1949年10月1日，首都为北京市[15]。中华人民共和国的陆地领土面积约960万平方千米，共划分为34个一级行政区，其中包括23个省份[注 11]、5个自治区、4个直辖市和2个特别行政区，是世界上面积第三或第四大的国家（纯陆地面积为第二大国家）[注 12][16]。",
                updatedAt: '2018-08-23T07:30:43.751Z',
            },
            {
                id: 2,
                title: "中国人民",
                logo: "",
                description: "中国人民是中国共产党领导的多党、多领域、多阶层的政权机关，是中国人民政治协商会议的执行机关",
                updatedAt: '2018-08-23T07:30:43.751Z',
            }
        ]
    },
    'GET /api/calendar': {
        success: true,
        message: null,
        data: {
            "code": 100000,
            "2023-11-28": [{ type: 'warning', content: 'This is warning event.' }],
            "2023-11-27": [{ type: 'success', content: 'This is usual event.' }],
            "2023-11-26": [{ type: 'error', content: 'This is error event.' }],
            "2023-11-25": [{ type: 'error', content: 'This is error event.' }],
            "2023-11-24": [{ type: 'error', content: 'This is error event.' }],
            "2023-11-23": [{ type: 'error', content: 'This is error event.' }],
        }
    }
});
