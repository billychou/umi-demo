import { request } from '@umijs/max';

export async function getLinkData(name: string) {
  return request(`/api/v1/link`, {
    params: {
      link_name: name,
    },
    method: 'GET',
  });
}
