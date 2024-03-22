import { AlertLevelType } from "../alertLevel";
import { AlertViewVo } from "../alertView/interface";

export interface AlertType {
  aggregationGroup?: number;
  aggregationIdentifier: string;
  aggregationLevel?: number;
  aggregationLock?: number;
  aggregationNum: number;
  alertKey?: string;
  alertLevel?: number;
  alertStatus?: number;
  alertValue?: string;
  business?: string;
  businessShort?: string;
  category?: string;
  closeTime?: number;
  compressGroup?: number;
  compressIdentifier: string;
  compressLevel?: number;
  compressLock?: number;
  compressNum: number;
  confirmDuration?: number;
  confirmTime?: number;
  createTime: number;
  dataCenter?: string;
  dataSource?: string;
  dataType?: number;
  dimension?: string;
  firstOccurrenceTime: number;
  flowEndTime?: number;
  flowStatus?: number;
  id: string;
  identifier?: string;
  itsmFlag?: number;
  noticeFlag?: number;
  itsmIdRef?: string;
  itsmStatus?: string;
  itsmUrl?: string;
  lastOccurrenceTime?: number;
  maintenanceFlag?: number;
  monitorObject?: string;
  node?: string;
  nodeAlias?: string;
  object?: string;
  objectClass?: string;
  occurrenceNum?: number;
  openDuration?: number;
  processDuration?: number;
  processStatus?: number;
  recoveryDuration?: number;
  recoveryTime?: number;
  reportTime?: number;
  summary?: string;
  tag?: string;
  transmissionDuration?: number;
  updateTime?: number;
  userGroup?: string;
  userName?: string;
  userRemark?: string;
  showNewState?: number;
  openDurationCalculate?: number;
  confirmDurationCalculate?: number;
  processDurationCalculate?: number;
  recoveryDurationCalculate?: number;
}
export interface ConditionItemType {
  fieldName: string;
  fieldOp: string;
  fieldType?: string;
  fieldValue?: any;
  disabled?: boolean;
}

export interface RequestParamType extends API.PageParams {
  conditionItems: ConditionItemType[];
  extField?: string[];
  aggregationGroupField?: string[];
  compressGroupField?: string[];
  standardField?: string[];
}

export interface AlertLevelSummaryVo {
  alertLevel: number;
  levelCount: number;
}

export interface AlertOpRecordVo {
  alertId?: string;
  alertLevel?: number;
  alertStatus?: number;
  createTime?: number;
  createUser?: string;
  firstOccurrenceTime?: number;
  id?: string;
  opType: number;
  processStatus?: number;
  recoveryTime?: number;
  remark?: string;
}

export type DetailModalType = "detail" | "compresslist" | "aggregationlist";
