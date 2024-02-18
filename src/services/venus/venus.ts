import { request } from '@umijs/max';

/**
 * 获取用户列表
 * @param params
 * @param options
 * @returns
 */
export async function getVenusLocalUserList(
  params: {
    a?: number;
    keyword?: string;
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<VENUS.VenusLocalUserResponse>(
    '/api/venus/v1/local/user/queryAll',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
