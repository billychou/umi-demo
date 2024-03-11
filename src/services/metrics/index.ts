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

export async function getMetrics(options?: { [key: string]: any }) {
  return request<MetricRes>('/api/metrics', {
    method: 'get',
    ...(options || {}),
  });
}
