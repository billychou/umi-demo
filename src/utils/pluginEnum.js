// 插件类型
export const pluginType = {
  INPUT: {
    name: '输入',
    processType: 'alertInputStandard',
  },
  OUTPUT: {
    name: '输出',
    processType: 'alertOutput',
  },
  RICH: {
    name: '丰富',
    processType: 'alertRich',
  },
  MAINTENANCE: {
    name: '维护',
    processType: 'alertMaintenance',
  },
  FILTER: {
    name: '过滤',
    processType: 'alertFilter',
  },
  AGGREGATION: {
    name: '聚合',
    processType: 'alertAggregation',
  },
  RANK: {
    name: '定级',
    processType: 'alertRank',
  },
  COMPRESS: {
    name: '压缩',
    processType: 'alertCompress',
  },
  UPGRADE: {
    name: '升级',
    processType: 'alertUpgrade',
  },
  CLOSE: {
    name: '关闭',
    processType: 'alertClose',
  },
  SILENCE: {
    name: '静默',
    processType: 'alertSilence',
  },
  NOTICE: {
    name: '通知',
  },
  TICKET: {
    name: '派单',
    processType: 'alertITSM',
  },
  TICKET_STATUS: {
    name: '工单',
  },
};

// 插件来源
export const pluginSource = [
  ['CUSTOM', '自定义'],
  ['INTERNAL', '内置'],
];
