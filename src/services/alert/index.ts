import { request } from "@umijs/max";
import type { BriefWindowType } from "../alertField/interface";
import type { AlertLevelSummaryVo, AlertOpRecordVo, AlertType, ConditionItemType, RequestParamType } from "./interface";

// 获取全部告警列表
export async function findTotalAlertList(param: RequestParamType) {
  return request<API.RequestPageResult<AlertType>>(`/api/venus/v1/alert/index`, {
    method: "POST",
    data: param,
  });
}

// 获取新告警数
export async function getNewAlertCount(param: any) {
  return request<API.RequestResult<{ latestNum: number; latestNewNum: number; soundId: number[] }>>(
    `/api/venus/v1/alert/count/latest`,
    {
      method: "POST",
      data: param,
    }
  );
}

// 获取时间粒度统计值
export async function getAlertCount(param: RequestParamType) {
  return request<API.RequestResult<number>>(`/api/venus/v1/alert/count`, {
    method: "POST",
    data: param,
  });
}

// 手动确认告警
export async function confirmationAlert(param: any) {
  return request<API.RequestResult<number>>(`/api/venus/v1/alert/confirmation`, {
    method: "POST",
    data: param,
  });
}

// 误报
export async function misreportAlert(param: any) {
  return request<API.RequestResult<number>>(`/api/venus/v1/alert/misreport`, {
    method: "POST",
    data: param,
  });
}

// 手动关闭告警
export async function closeAlert(param: any) {
  return request<API.RequestResult<number>>(`/api/venus/v1/alert/close`, {
    method: "POST",
    data: param,
  });
}

// 手动升级告警
export async function upgradeAlert(param: any) {
  return request<API.RequestResult<number>>(`/api/venus/v1/alert/upgrade`, {
    method: "POST",
    data: param,
  });
}

// 压缩告警
export async function compressAlert(param: any) {
  return request<API.RequestResult<number>>(`/api/venus/v1/alert/compress`, {
    method: "POST",
    data: param,
  });
}

// 设为主压缩告警
export async function compressParent(param) {
  return request(`/api/venus/v1/alert/compress/parent`, {
    method: "POST",
    data: param,
  });
}

// 获取告警详情
export async function findOneAlertById(id) {
  return request(`/api/venus/v1/alert/details/${id}`, {
    method: "GET",
  });
}

// 获取告警原始数据
export async function getOriginalById(id, options) {
  return request(`/api/venus/v1/alert/original/${id}`, {
    method: "GET",
    ...(options || {}),
  });
}

// 获取告警处理记录
export async function getProcessById(id: string, data: any) {
  return request<API.RequestAllListResult<AlertOpRecordVo>>(`/api/venus/v1/alert/process/${id}`, {
    method: "POST",
    data,
  });
}

// 获取实时告警列表
// export async function findRealAlertList(param, options) {
//   return request(`/api/venus/v1/alert/realtime`, {
//     method: 'POST',
//     data: param,
//     ...(options || {}),
//   });
// }

// 获取告警轨迹
export async function getTraceById(id: string, data: { query?: string }) {
  return request<API.RequestAllListResult<AlertOpRecordVo>>(`/api/venus/v1/alert/trace/${id}`, {
    method: "POST",
    data,
  });
}

// 关闭压缩告警
export async function closeCompress(param: any) {
  return request<API.RequestResult<any>>(`/api/venus/v1/alert/compress/close`, {
    method: "POST",
    data: param,
  });
}

// 全部告警列表统计
export async function alertNumberStatistic(param: { conditionItems: ConditionItemType[] }) {
  return request<API.RequestAllListResult<AlertLevelSummaryVo>>(`/api/venus/v1/alert/level/summary`, {
    method: "POST",
    data: param,
  });
}

// 实时告警列表统计
// export async function realtimeAlertNumberStatistic(param, options) {
//   return request(`/api/venus/v1/alert/realtime/level/summary`, {
//     method: 'POST',
//     data: param,
//     ...(options || {}),
//   });
// }

//根据聚合易主
export async function setMainAggregation(data: { ownerAlertId: string }) {
  return request<API.RequestResult<unknown>>(`/api/venus/v1/alert/aggregation/parent`, {
    method: "POST",
    data,
  });
}

//分页获取告警的原始数据
export async function getOriginalPages(data) {
  return request(`/api/venus/v1/alert/original`, {
    method: "POST",
    data,
  });
}

// 根据告警原始id获取告警ID
export async function getAlertIdByOriginalId(originalId) {
  return request(`/api/venus/v1/alert/originalRef/${originalId}`, {
    method: "GET",
  });
}

// 获取组字段信息
export async function getGroupFieldList(data: {
  aggregationField?: string[];
  aggregationIdentifier?: string[];
  compressField?: string[];
  compressIdentifier?: string[];
}) {
  return request(`/api/venus/v1/alert/ac/group`, {
    method: "POST",
    data,
  });
}

// 获取告警详情tab
export async function getBriefWindow() {
  return request<API.RequestAllListResult<BriefWindowType>>(`/api/venus/v1/system/brief-window`, {
    method: "GET",
  });
}

// 修改告警详情tab
export async function updateBriefWindow(data) {
  return request(`/api/venus/v1/system/brief-window`, {
    method: "POST",
    data,
  });
}

// 获取操作记录类型
export async function getOperatorRecordType(type) {
  return request(`/api/venus/v1/alert/op-record/type/${type}`, {
    method: "GET",
  });
}

// 查询全部处置记录
export async function getDisposeRecordList(alertId) {
  return request(`/api/venus/v1/alert/dispose-record/${alertId}`, {
    method: "GET",
  });
}

// 添加处置记录
export async function addDisposeRecordList(data) {
  return request(`/api/venus/v1/alert/dispose-record`, {
    method: "POST",
    data,
  });
}

// 获取无效告警配置
export async function getSystemConf(name: string) {
  return request<API.RequestResult<any>>(`/api/venus/v1/system/conf/${name}`, {
    method: "GET",
  });
}

// 修改无效告警配置
export async function updateSystemConf(name: string, data: any) {
  return request<API.RequestResult<any>>(`/api/venus/v1/system/conf/${name}`, {
    method: "PUT",
    data,
  });
}

// 自动补全
export async function getAutoTip(data: any) {
  return request(`/api/venus/v1/alert/tip`, {
    method: "POST",
    data,
  });
}
