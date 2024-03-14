import {
  TFunction,
  TFunctionName,
  TState,
  TStateName,
} from '@/services/algorithmCenter/task/interface';

export const RANGE_OPTIONS = [
  {
    label: '一小时',
    value: '1h',
  },
  {
    label: '一天',
    value: '1d',
  },
  {
    label: '一周',
    value: '1w',
  },
  {
    label: '一个月',
    value: '1M',
  },
];

export enum EMetricType {
  '原子指标' = 1,
  '衍生指标' = 2,
}

export type TMetricType = 1 | 2;

export const METRIC_TYPE_OPTIONS = [
  {
    label: '原子指标',
    value: EMetricType.原子指标,
  },
  {
    label: '衍生指标',
    value: EMetricType.衍生指标,
  },
];

export type Op = 'EQ' | 'NEQ' | 'IN' | 'NOTIN';

export enum EOp {
  'EQ' = '=',
  'NEQ' = '<>',
  'IN' = 'in',
  'NOTIN' = 'not in',
}

export const OP_OPTIONS: {
  label: EOp;
  value: Op;
}[] = [
  {
    label: EOp.EQ,
    value: 'EQ',
  },
  {
    label: EOp.NEQ,
    value: 'NEQ',
  },
  {
    label: EOp.IN,
    value: 'IN',
  },
  {
    label: EOp.NOTIN,
    value: 'NOTIN',
  },
];

export type AggregationRule = 'AVG' | 'MIN' | 'MAX' | 'SUM' | 'COUNT';

export const AGGREGATION_RULE_OPTIONS: {
  label: string;
  value: AggregationRule;
}[] = [
  {
    label: 'Avg by',
    value: 'AVG',
  },
  {
    label: 'Min by',
    value: 'MIN',
  },
  {
    label: 'Max by',
    value: 'MAX',
  },
  {
    label: 'Sum by',
    value: 'SUM',
  },
];

export const AGGREGATION_METHOD_OPTIONS: {
  label: string;
  value: AggregationRule;
}[] = [
  {
    label: 'Avg',
    value: 'AVG',
  },
  {
    label: 'Min',
    value: 'MIN',
  },
  {
    label: 'Max',
    value: 'MAX',
  },
  {
    label: 'Sum',
    value: 'SUM',
  },
  {
    label: 'Count',
    value: 'COUNT',
  },
];

// 每多长时间执行的单位
export type IntervalUnit = 'm' | 'h' | 'd' | 'w';

export const INTERVAL_UNIT_OPTIONS: {
  label: string;
  value: IntervalUnit;
}[] = [
  {
    label: '分',
    value: 'm',
  },
  {
    label: '小时',
    value: 'h',
  },
  {
    label: '天',
    value: 'd',
  },
  {
    label: '周',
    value: 'w',
  },
];

// 保留时间
export const RESERVE_TIMES = [
  {
    label: '7天',
    value: 'rp_7d',
  },
  {
    label: '14天',
    value: 'rp_14d',
  },
  {
    label: '30天',
    value: 'rp_30d',
  },
  {
    label: '60天',
    value: 'rp_60d',
  },
  {
    label: '90天',
    value: 'rp_90d',
  },
  {
    label: '180天',
    value: 'rp_180d',
  },
  {
    label: '360天',
    value: 'rp_360d',
  },
  {
    label: '720天',
    value: 'rp_720d',
  },
];

// 时间平移
export const TIME_SHIFT_OPTIONS = [
  {
    label: '一小时前',
    value: 3600,
  },
  {
    label: '一天前',
    value: 3600 * 24,
  },
  {
    label: '一周前',
    value: 3600 * 24 * 7,
  },
  {
    label: '四周前',
    value: 3600 * 24 * 7 * 4,
  },
];

// 任务中心 - 功能
export const FUNCTION_OPTIONS: { label: TFunctionName; value: TFunction }[] = [
  {
    label: '手动训练',
    value: 'MANUAL_TRAIN',
  },
  {
    label: '自动训练',
    value: 'AUTO_TRAIN',
  },
  {
    label: '指标浏览器',
    value: 'METRIC_ANOMALY',
  },
  {
    label: '在线异常检测',
    value: 'ON_LINE_ANOMALY',
  },
];

// 任务状态
export const TASK_STATE_OPTIONS: { label: TStateName; value: TState }[] = [
  {
    label: '创建中',
    value: 'CREATING',
  },
  {
    label: '执行中',
    value: 'WORKING',
  },
  {
    label: '执行结束',
    value: 'FINISHED',
  },
  {
    label: '手动停止',
    value: 'KILLED',
  },
];

// Driver端核数
export const DRIVER_CORES_OPTIONS = [
  {
    label: '1核',
    value: 1,
  },
  {
    label: '2核',
    value: 2,
  },
  {
    label: '3核',
    value: 3,
  },
  {
    label: '4核',
    value: 4,
  },
  {
    label: '5核',
    value: 5,
  },
  {
    label: '6核',
    value: 6,
  },
];

// 单个Executor核数
export const EXECUTOR_CORES_OPTIONS = [
  ...DRIVER_CORES_OPTIONS,
  {
    label: '7核',
    value: 7,
  },
  {
    label: '8核',
    value: 8,
  },
  {
    label: '9核',
    value: 9,
  },
  {
    label: '10核',
    value: 10,
  },
];

// 单个Executor内存
export const EXECUTOR_MEMORY_OPTIONS = [
  {
    label: '1G',
    value: '1g',
  },
  {
    label: '2G',
    value: '2g',
  },
  {
    label: '3G',
    value: '3g',
  },
  {
    label: '4G',
    value: '4g',
  },
  {
    label: '6G',
    value: '6g',
  },
  {
    label: '8G',
    value: '8g',
  },
  {
    label: '12G',
    value: '12g',
  },
];

// Driver端内存资源
export const DRIVER_MEMORY_OPTIONS = [
  ...EXECUTOR_MEMORY_OPTIONS,
  {
    label: '16G',
    value: '16g',
  },
];

// 批处理间隔
export const BATCH_DURATION_OPTIONS = [
  {
    label: '5秒',
    value: 5,
  },
  {
    label: '10秒',
    value: 10,
  },
  {
    label: '20秒',
    value: 20,
  },
  {
    label: '30秒',
    value: 30,
  },
  {
    label: '1分钟',
    value: 60,
  },
];

// 贴源层 - 数仓定义状态
export enum EOdsModelStatus {
  'EXIST' = '存在',
  'NONE' = '缺失',
}

export type TOdsModelStatus = keyof typeof EOdsModelStatus;

export const ODS_MODEL_STATUS_OPTIONS: {
  label: `${EOdsModelStatus}`;
  value: TOdsModelStatus;
}[] = [
  {
    label: EOdsModelStatus.EXIST,
    value: 'EXIST',
  },
  {
    label: EOdsModelStatus.NONE,
    value: 'NONE',
  },
];

// 数仓层 - 数仓定义状态
export enum EModelStatus {
  'NONE' = '缺失贴源定义',
  'LATEST' = '最新',
  'EXPIRE' = '过期',
}

export type TModelStatus = keyof typeof EModelStatus;

export const MODEL_STATUS_OPTIONS: {
  label: `${EModelStatus}`;
  value: TModelStatus;
}[] = [
  {
    label: EModelStatus.NONE,
    value: 'NONE',
  },
  {
    label: EModelStatus.LATEST,
    value: 'LATEST',
  },
  {
    label: EModelStatus.EXPIRE,
    value: 'EXPIRE',
  },
];

/** 自动粒度 */
export const AUTO_GRANULARITY = 'auto';

/** 原始粒度 */
export const ORIGIN_GRANULARITY = '-1';

/** 聚合粒度选项 */
export const GRANULARITY_OPTIONS = [
  {
    label: '自动',
    value: AUTO_GRANULARITY,
    description: '自动平滑曲线',
  },
  {
    label: '原始粒度',
    value: ORIGIN_GRANULARITY,
    description: '数据本来的粒度',
  },
  {
    label: '30秒',
    value: '30',
  },
  {
    label: '1分钟',
    value: '60',
  },
  {
    label: '5分钟',
    value: `${5 * 60}`,
  },
  {
    label: '10分钟',
    value: `${10 * 60}`,
  },
  {
    label: '30分钟',
    value: `${30 * 60}`,
  },
  {
    label: '1小时',
    value: `${60 * 60}`,
  },
  {
    label: '6小时',
    value: `${6 * 60 * 60}`,
  },
  {
    label: '24小时',
    value: `${24 * 60 * 60}`,
  },
  {
    label: '7天',
    value: `${7 * 24 * 60 * 60}`,
  },
];
