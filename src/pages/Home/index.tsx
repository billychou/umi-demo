import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';
import { Card } from 'antd';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  // 获取初始化状态值
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState;

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        {/* <Guide name={trim(name)} /> */}
        <Card>
          {currentUser.name}
        </Card>
      </div>
    </PageContainer>
  );
};

export default HomePage;
