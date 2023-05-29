import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer, ProCard, ProList } from '@ant-design/pro-components';
import { useLocation, useMatch, useModel, useParams, useSearchParams } from '@umijs/max';
import styles from './index.less';
import { Card, message } from 'antd';

const UserPage: React.FC = () => {
  const { name } = useModel('global');
  // 获取初始化状态值
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState;
  // 路由组件参数
  return (
    <PageContainer ghost>
        <ProCard>
          {currentUser.username}
        </ProCard>
    </PageContainer>
  );
};

export default UserPage;
