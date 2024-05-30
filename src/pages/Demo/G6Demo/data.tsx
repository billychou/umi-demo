export const appData = {
  nodes: [
    {
      id: 'node-1',
      data: {
        name: 'Module',
        type: 'module',
        status: 'success',
        success: 90,
        time: 58,
        failure: 8,
      },
    },
    {
      id: 'node-2',
      data: {
        name: 'Process',
        type: 'process',
        status: 'error',
        success: 11,
        time: 12,
        failure: 26,
      },
    },
    {
      id: 'node-3',
      data: {
        name: 'Process',
        type: 'process',
        status: 'error',
        success: 12,
        time: 12,
        failure: 26,
      },
    },
  ],
  edges: [
    { source: 'node-1', target: 'node-2' },
    { source: 'node-1', target: 'node-3' },
  ],
};
