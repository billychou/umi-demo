import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';
import HomeRow from './components/homeRow';
import BusinessCard from './components/businessCard';
import { Space } from 'antd';


/**
 * HomePage Component 
 */
const HomePage: React.FC = () => {
  return (
    <PageContainer ghost>
      <Space size="small" direction="vertical">
        <BusinessCard />
        <HomeRow />
      </Space>
    </PageContainer>
  );
};

export default HomePage;
