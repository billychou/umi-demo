import { request } from '@umijs/max';

type HomeResponse = {
  success: boolean;
  data: any[];
  message?: string;
};

export async function getHomeData(
  params: {
    keyword?: string;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<HomeResponse>('/api/home', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function getCalendarData(
  params?: any,
  options?: { [key: string]: any },
) {
  return request<HomeResponse>('/api/calendar', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
