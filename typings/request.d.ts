/* eslint-disable @typescript-eslint/consistent-type-imports */
declare namespace API {
  type RequestResult<T> = {
    code: number;
    data: T | null;
    msg?: string;
  };

  type RequestPageResult<T> = {
    code?: number;
    data: {
      currentPage: number;
      lists: T[];
      pageSize: number;
      totalCount: number;
      totalPage: number;
    };
    msg?: string;
  };

  type RequestAllListResult<T> = {
    code?: number;
    data: T[];
    msg?: string;
  };

  type PageParams = {
    currentPage: number;
    pageSize: number;
  };

  type comDataType = {
    value: string | number;
    label: string;
    description?: string;
    picPath?: string;
    accessIdentity?: import('@/enum').AccessEnum;
    code?: string | number;
  };
}
