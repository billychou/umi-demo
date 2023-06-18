import { request } from '@umijs/max';

/**
 * 获取用户列表
 * @param params 
 * @param options 
 * @returns 
 */
export async function getUserList(
    params: {
      // query
      /** keyword */
      keyword?: string;
      /** current */
      current?: number;
      /** pageSize */
      pageSize?: number;
    },
    options?: { [key: string]: any },
  ) {
    return request<VENUS.VenusLocalUserResponse>('/api/venus/v1/local/user/queryAll', {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    });
  }