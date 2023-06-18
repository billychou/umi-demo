import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import React, { useState, useEffect } from 'react';
import { PageContainer, ProCard, ProList } from '@ant-design/pro-components';
import { useLocation, useMatch, useModel, useParams, useSearchParams } from '@umijs/max';
import styles from './index.less';
import { Card, message } from 'antd';
import { getUserList } from '@/services/venus/venus';

const UserPage: React.FC = () => {
  const { name } = useModel('global');
  // 获取初始化状态值
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState;
  const  getVenusLocalUser =  async ()=> {
    const allUser = await getUserList();
  }
  useEffect(() => {
    console.log("第一次渲染!");
  }, []);
  // 路由组件参数
  return (
    <PageContainer ghost>
        <ProCard>
          hello
        </ProCard>
    </PageContainer>
  );
};

export default UserPage;
