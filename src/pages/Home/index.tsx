import { PageContainer } from '@ant-design/pro-components';
import { useLocation, useMatch, useModel, useParams, useSearchParams } from '@umijs/max';
import styles from './index.less';
import { Card, message } from 'antd';

/**
 * HomePage Component 
 */
const HomePage: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState;
  
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Card>
            当前用户:{currentUser.username}
        </Card>
      </div>
    </PageContainer>
  );
};

export default HomePage;
