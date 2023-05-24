import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useLocation, useMatch, useModel, useParams, useSearchParams } from '@umijs/max';
import styles from './index.less';
import { Card, message } from 'antd';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  // 获取初始化状态值
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState;
  // 路由组件参数
  const match = useMatch('/home');
  message.success(match?.pathname);
  message.success(match?.pathnameBase);
  // location
  const location = useLocation();
  message.warning(location.pathname);
  message.warning(location.search);
  message.warning(location.hash);
  message.warning(location.key);

  // 动态路由参数
  const params = useParams();
  message.warning(params.id);

  const [searchParams, setSearchParams] = useSearchParams();
  const a = searchParams.get('a');
  message.warning(searchParams.toString());

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
