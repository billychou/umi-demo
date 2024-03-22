import { AccessEnum } from '@/enum';
import { isShowBtn } from '@/utils/access.config';
import { ENTITY } from '@/utils/global';
import type { FieldListType } from '../alertField/interface';
const _buttonList = [
  {
    label: '批量操作',
    type: 'batch',
    access: (arrNum: number, type: number) => false,
  },
  {
    label: '确认',
    type: 'confirm',
    // accessIdentity: AccessEnum.ALERTLIST_CONFIRM_BTN,
    access: (arrNum: number, type: number) =>
      arrNum === 0 || [3].includes(type),
  },
  {
    label: '关闭',
    type: 'close',
    accessIdentity: AccessEnum.ALERTLIST_CLOSE_BTN,
    access: (arrNum: number, type: number) =>
      arrNum === 0 || [3].includes(type),
  },
  {
    label: '升级',
    type: 'upgrade',
    accessIdentity: AccessEnum.ALERTLIST_UPGRADE_BTN,
    access: (arrNum: number, type: number) =>
      arrNum === 0 || [3].includes(type),
  },
  {
    label: '派单',
    type: 'dispatch',
    accessIdentity: AccessEnum.ALERTLIST_DISPATCH_BTN,
    access: (arrNum: number, type: number) =>
      arrNum === 0 || [3].includes(type),
  },
  {
    label: '压缩',
    type: 'compress',
    accessIdentity: AccessEnum.ALERTLIST_COMPRESS_BTN,
    access: (arrNum: number, type: number, angle?: string) =>
      arrNum < 2 || angle !== 'compress',
  },
  {
    label: '通知',
    type: 'notice',
    accessIdentity: AccessEnum.ALERTLIST_NOTICE_BTN,
    access: (arrNum: number, type: number) =>
      arrNum === 0 || [3].includes(type),
  },
  {
    label: '误报',
    type: 'misreport',
    access: (arrNum: number, type: number) =>
      arrNum === 0 || [3].includes(type),
  },
  {
    label: '分析',
    type: 'analysis',
    accessIdentity: AccessEnum.ALERTLIST_ANALYSIS_BTN,
    access: (arrNum: number, type: number) => [2, 3, 4].includes(type),
  },
  {
    label: '标签',
    type: 'tag',
    accessIdentity: AccessEnum.MT_TAG,
    access: (arrNum: number, type: number) =>
      arrNum === 0 || [3].includes(type),
  },
  {
    label: '导出',
    type: 'download',
    access: (arrNum: number, type: number) => false,
    hiddenInList: true,
  },
];

export const buttonList = _buttonList.filter(
  (n) => isShowBtn(n.accessIdentity) && !n.hiddenInList,
);

export const allButtonList = _buttonList.filter((n) =>
  isShowBtn(n.accessIdentity),
);

export const dataTypeOptions: (API.comDataType & { children: string[] })[] = [
  {
    label: `正常`,
    value: 1,
    children: ['list', 'aggregation', 'compress'],
  },
  {
    label: `过滤`,
    value: 2,
    children: ['list'],
  },
  {
    label: `维护`,
    value: 4,
    children: ['list'],
  },
  {
    label: `无效`,
    value: 3,
    children: ['list'],
  },
];

// export const dataTypeOptions = _dataTypeOptions.map((n) => ({
//   ...n,
//   children: n.children.filter((w) => isShowBtn(w.accessIdentity)),
// }));

export const validDataTypeOptions = dataTypeOptions.filter(
  (n) => n.value !== 3,
);

// export const initDataTypeObj: Record<number, number> = dataTypeOptions.reduce((obj: any, n) => {
//   obj[n.value] = n.children[0].value;
//   return obj;
// }, {});

export const alertAngleList = [
  { label: '列表', value: 'list' },
  {
    label: '聚合',
    value: 'aggregation',
    accessIdentity: AccessEnum.ALERTLIST_ALERTAGGREGATION,
  },
  {
    label: '压缩',
    value: 'compress',
    accessIdentity: AccessEnum.ALERTLIST_COMPRESS_BTN,
  },
].filter((n) => isShowBtn(n.accessIdentity));

export const groupFieldList: FieldListType[] = [
  {
    code: 'compressNoticeFlag',
    name: '通知标志',
    id: 100001,
    fieldType: 'TEXT',
    operators: [],
    fieldOrder: 0,
    fieldValues: [],
    extend: true,
    selected: 'NO',
    fieldCategory: 'compress',
  },
  {
    code: 'compressItsmFlag',
    name: '工单标志',
    id: 100002,
    fieldType: 'TEXT',
    operators: [],
    fieldOrder: 0,
    fieldValues: [],
    extend: true,
    selected: 'NO',
    fieldCategory: 'compress',
  },
  {
    code: 'compressEarlyTime',
    name: '最早发生时间',
    id: 100003,
    fieldType: 'DATETIME',
    operators: [],
    fieldOrder: 0,
    fieldValues: [],
    extend: true,
    selected: 'NO',
    fieldCategory: 'compress',
  },
  {
    code: 'compressLatestTime',
    name: '最近发生时间',
    id: 100004,
    fieldType: 'DATETIME',
    operators: [],
    fieldOrder: 0,
    fieldValues: [],
    extend: true,
    selected: 'NO',
    fieldCategory: 'compress',
  },
  {
    code: 'compressOpenCount',
    name: `打开${ENTITY}数`,
    id: 100005,
    fieldType: 'TEXT',
    operators: [],
    fieldOrder: 0,
    fieldValues: [],
    extend: true,
    selected: 'NO',
    fieldCategory: 'compress',
  },
  {
    code: 'compressConfirmCount',
    name: `确认${ENTITY}数`,
    id: 100006,
    fieldType: 'TEXT',
    operators: [],
    fieldOrder: 0,
    fieldValues: [],
    extend: true,
    selected: 'NO',
    fieldCategory: 'compress',
  },
  {
    code: 'compressCloseCount',
    name: `关闭${ENTITY}数`,
    id: 100007,
    fieldType: 'TEXT',
    operators: [],
    fieldOrder: 0,
    fieldValues: [],
    extend: true,
    selected: 'NO',
    fieldCategory: 'compress',
  },
  {
    code: 'compressDuration',
    name: '故障持续时长',
    id: 100008,
    fieldType: 'TEXT',
    operators: [],
    fieldOrder: 0,
    fieldValues: [],
    extend: true,
    selected: 'NO',
    fieldCategory: 'compress',
  },
  {
    code: 'compressFaultCount',
    name: `故障${ENTITY}数`,
    id: 100009,
    fieldType: 'TEXT',
    operators: [],
    fieldOrder: 0,
    fieldValues: [],
    extend: true,
    selected: 'NO',
    fieldCategory: 'compress',
  },
  {
    code: 'compressRecoveryCount',
    name: `恢复${ENTITY}数`,
    id: 100010,
    fieldType: 'TEXT',
    operators: [],
    fieldOrder: 0,
    fieldValues: [],
    extend: true,
    selected: 'NO',
    fieldCategory: 'compress',
  },
  {
    code: 'aggregationNoticeFlag',
    name: '通知标志',
    id: 200001,
    fieldType: 'TEXT',
    operators: [],
    fieldOrder: 0,
    fieldValues: [],
    extend: true,
    selected: 'NO',
    fieldCategory: 'aggregation',
  },
  {
    code: 'aggregationItsmFlag',
    name: '工单标志',
    id: 200002,
    fieldType: 'TEXT',
    operators: [],
    fieldOrder: 0,
    fieldValues: [],
    extend: true,
    selected: 'NO',
    fieldCategory: 'aggregation',
  },
  {
    code: 'aggregationEarlyTime',
    name: '最早发生时间',
    id: 200003,
    fieldType: 'DATETIME',
    operators: [],
    fieldOrder: 0,
    fieldValues: [],
    extend: true,
    selected: 'NO',
    fieldCategory: 'aggregation',
  },
  {
    code: 'aggregationLatestTime',
    name: '最近发生时间',
    id: 200004,
    fieldType: 'DATETIME',
    operators: [],
    fieldOrder: 0,
    fieldValues: [],
    extend: true,
    selected: 'NO',
    fieldCategory: 'aggregation',
  },
  {
    code: 'aggregationOpenCount',
    name: `打开${ENTITY}数`,
    id: 200005,
    fieldType: 'TEXT',
    operators: [],
    fieldOrder: 0,
    fieldValues: [],
    extend: true,
    selected: 'NO',
    fieldCategory: 'aggregation',
  },
  {
    code: 'aggregationConfirmCount',
    name: `确认${ENTITY}数`,
    id: 200006,
    fieldType: 'TEXT',
    operators: [],
    fieldOrder: 0,
    fieldValues: [],
    extend: true,
    selected: 'NO',
    fieldCategory: 'aggregation',
  },
  {
    code: 'aggregationCloseCount',
    name: `关闭${ENTITY}数`,
    id: 200007,
    fieldType: 'TEXT',
    operators: [],
    fieldOrder: 0,
    fieldValues: [],
    extend: true,
    selected: 'NO',
    fieldCategory: 'aggregation',
  },
  {
    code: 'aggregationDuration',
    name: '故障持续时长',
    id: 200008,
    fieldType: 'TEXT',
    operators: [],
    fieldOrder: 0,
    fieldValues: [],
    extend: true,
    selected: 'NO',
    fieldCategory: 'aggregation',
  },
  {
    code: 'aggregationFaultCount',
    name: `故障${ENTITY}数`,
    id: 200009,
    fieldType: 'TEXT',
    operators: [],
    fieldOrder: 0,
    fieldValues: [],
    extend: true,
    selected: 'NO',
    fieldCategory: 'aggregation',
  },
  {
    code: 'aggregationRecoveryCount',
    name: `恢复${ENTITY}数`,
    id: 200010,
    fieldType: 'TEXT',
    operators: [],
    fieldOrder: 0,
    fieldValues: [],
    extend: true,
    selected: 'NO',
    fieldCategory: 'aggregation',
  },
];
