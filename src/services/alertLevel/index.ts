import { request } from "@umijs/max";

export interface AlertLevelType {
  /**
   * 颜色编码
   */
  colorCode: string;
  soundIdRef?: number;
  /**
   * 主键ID
   */
  id?: number;
  /**
   * 级别
   */
  level: number;
  /**
   * name
   */
  name: string;
  count?: number;
}

export async function getAlertLevel() {
  return request<API.RequestAllListResult<AlertLevelType>>(`/api/venus/v1/system/alert-level`, {
    method: "GET",
  });
}

export async function addAlertLevel(data: AlertLevelType[]) {
  return request(`/api/venus/v1/system/alert-level`, {
    method: "POST",
    data,
  });
}

export async function updateAlertLevel(data: AlertLevelType) {
  return request(`/api/venus/v1/system/alert-level`, {
    method: "PUT",
    data,
  });
}
