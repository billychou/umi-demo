import { request } from '@umijs/max';

type MetricsRecord = {
  time: string;
  value: number;
  measurement: string;
  field: string;
  host: string;
  server: string;
};

type MetricRes = MetricsRecord[];

type RequestParams = {
  start?: string;
  end?: string;
  interval?: number;
};

export async function getMetrics(
  params: RequestParams,
  options?: { [key: string]: any },
) {
  return request<MetricRes>('/api/v1/metrics', {
    params: { ...params },
    method: 'get',
    ...(options || {}),
  });
}
