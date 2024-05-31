export const appData = {
  nodes: [
    {
      id: 'CBS',
      data: {
        name: '核心应用',
        type: 'app',
        status: 'success',
        success: 90,
        time: 58,
        failure: 8,
      },
    },
    {
      id: 'CBF',
      data: {
        name: '核心前置',
        type: 'app',
        status: 'error',
        success: 11,
        time: 12,
        failure: 26,
      },
    },
    {
      id: 'CDQ',
      data: {
        name: '核心查询',
        type: 'app',
        status: 'error',
        success: 12,
        time: 12,
        failure: 26,
      },
    },
    {
      id: 'MSC',
      data: {
        name: '新消息中心',
        type: 'app',
        status: 'success',
        success: 12,
        time: 12,
        failure: 26,
      },
    },
  ],
  edges: [
    { source: 'CBF', target: 'CBS' },
    { source: 'CBF', target: 'CDQ' },
    { source: 'CBS', target: 'MSC' },
  ],
};
