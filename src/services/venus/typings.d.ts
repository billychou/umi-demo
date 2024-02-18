/* eslint-disable */

declare namespace VENUS {
  type VenusUser = {
    id: number;
    key: number;
    userName: string;
    nickName: string;
    createTime: number;
    updateTime: number;
    createUser: string;
    updateUser: string;
    userGroupNameRefs: Array<Record<string, any>>;
    userGroupIdRefs: Array<Record<string, any>>;
  };

  type VenusLocalUserResponse = {
    success?: boolean;
    code?: number;
    msg?: string;
    data: Array<VenusUser>;
  };

  type CatInfo = {
    age: number;
    breed: string;
  };

  type CatName = 'miffy' | 'boris' | 'mordred';

  const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: 'Persian' },
    boris: { age: 5, breed: 'Maine Coon' },
    mordred: { age: 16, breed: 'British Shorthair' },
  };
  cats.boris;

  interface User {
    id?: string;
    userid?: string;
    username?: string;
    nickname?: string;
  }

  interface CurrentUser {
    id?: string;
    userid?: string;
    username?: string;
    nickname?: string;
  }

  interface PageInfo {
    current?: number;
    pageSize?: number;
    total?: number;
    list?: Array<Record<string, any>>;
  }

  interface PageInfo_UserInfo_ {
    current?: number;
    pageSize?: number;
    total?: number;
    list?: Array<UserInfo>;
  }

  interface Result {
    success?: boolean;
    errorMessage?: string;
    data?: Record<string, any>;
  }

  interface Result_PageInfo_UserInfo__ {
    success?: boolean;
    errorMessage?: string;
    data?: PageInfo_UserInfo_;
  }

  interface Result_UserInfo_ {
    success?: boolean;
    errorMessage?: string;
    data?: UserInfo;
  }

  interface Result_string_ {
    success?: boolean;
    errorMessage?: string;
    data?: string;
  }

  type UserGenderEnum = 'MALE' | 'FEMALE';

  interface UserInfo {
    id?: string;
    name?: string;
    /** nick */
    nickName?: string;
    /** email */
    email?: string;
    gender?: UserGenderEnum;
  }

  interface UserInfoVO {
    name?: string;
    /** nick */
    nickName?: string;
    /** email */
    email?: string;
  }
}
