export const DEFAULT_NAME = 'Umi Max';

import { DefaultOptionType } from 'antd/lib/cascader';

export enum SPACE {
  SMALL = 8,
  MIDDLE = 16,
  LARGE = 24,
}

export enum STATE_CODE {
  SUCCESS = 0,
  DEFAULT_ERROR = 1,
  DATA_CONSTRAINT_ERROR = 2,
  UNAUTHORIZED = 401,
}

export const PAGE_INDEX_BASE = 1;
export const PAGE_SIZE = 20;
export const PAGE_SIZE_SMALL = 5;
export const PAGE_SIZE_MAX = 10000;
export const PAGE_SIZE_PORTAL_TABLE = 1000; // 数据门户搜索详情相关表格

// 通用约束规范
export enum GENERAL_CONSTRAINT {
  INPUT_MAX_LENGTH = 24,
  TEXTBOX_MAX_LENGTH = 200,
  TEXTAREA_MAX_LENGTH = 1000,
  TEXTAREA_MIDDLE_LENGTH = 500,
  INPUT_NUMBER_MAX_LENGTH = 999999999,
  INPUT_COMBINE_MAX_LENGTH = 9,
  INPUT_NAME_MAX_LENGTH = 64,
  INPUT_NAME_LARGE_LENGTH = 128,
  INPUT_LENGTH_255 = 255,
  INPUT_TOKEN_LENGTH = 2000,
}

// 防抖/截流通用时间
export const DEBOUNCE_THROTTLE_WAIT_TIME = 500;

// 头部高度
export const HEADER_HEIGHT = 50;

// 查询栏高度
export const SEARCH_HEIGHT = 49;

// PageContainer 组件页头高度
export const PAGE_HEADER_HEIGHT = 49;

// 内边距高度
export const PADDING_HEIGHT = SPACE.MIDDLE * 2;

// table 表头高度
export const TABLE_HEADER_HEIGHT = 39;

// 选项卡头部高度+下边距
export const TAB_HEADER_HEIGHT = 46 + 16;

// 卡片式选项卡头部高度+下边距
export const TAB_CARD_HEADER_HEIGHT = 40 + 16;

// 分页器高度
export const PAGINATION_HEIGHT = 24 + 16;

// 分页器高度2
export const PAGINATION_HEIGHT2 = 24 + 32;

// table 表体高度
export const TABLE_CONTENT_HEIGHT = `calc(100vh - ${HEADER_HEIGHT}px - ${SEARCH_HEIGHT}px - ${PADDING_HEIGHT}px - ${TABLE_HEADER_HEIGHT}px - ${PAGINATION_HEIGHT}px)`;

export const TABLE_CONTENT_HEIGHT2 = `calc(100vh - ${HEADER_HEIGHT}px - ${SEARCH_HEIGHT}px - ${PADDING_HEIGHT}px - ${TABLE_HEADER_HEIGHT}px - ${PAGINATION_HEIGHT}px - 50px)`;

// 指标相关输入长度约束--表名：128，指标英文名：128，指标中文名：256，维度英文名：128，维度中文名：256
export enum METRIC_LIMIT {
  LIST_NAME = 255,
  CH_NAME = 255,
  EN_NAME = 255,
  DIMENSION_CH = 255,
  DIMENSION_EN = 255,
}
export const NOT_VALUE = '--';

export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const DATE_TIME_START = 'YYYY-MM-DD 00:00:00';
export const DATE_TIME_END = 'YYYY-MM-DD 23:59:59';

export enum RELATION_TYPE {
  native = '原生关系',
  derive = '派生关系',
}

export type TRELATION_TYPE = keyof typeof RELATION_TYPE;

export const BODY_STYLE: React.CSSProperties = {
  maxHeight: 'calc(100vh - 100px - 55px - 53px - 24px)',
  overflow: 'auto',
};

export const POPCONFIRM_OVERLAY_STYLE: React.CSSProperties = {
  minWidth: 160,
  maxWidth: 320,
  wordBreak: 'break-all',
};

export const SHOW_SEARCH = {
  filter: (inputValue: string, options: DefaultOptionType[]) => {
    // console.log(inputValue, options)
    const inputValueLower = inputValue.toLowerCase();
    const lastOption = options[options.length - 1];
    const lastLabel = (lastOption.label as string).toLowerCase();
    // 只匹配叶子节点，并且叶子节点必须是对象
    return lastLabel.includes(inputValueLower) && lastOption.id;
  },
};

export const SPIN_TIP = '数据量巨大，数据加载中……';
