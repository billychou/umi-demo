import { useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';
import HomeRow from './components/homeRow';
import BusinessCard from './components/businessCard';
import FilterBox from './components/formSelect';
import MetricLine from './components/metricLine';
import CalendarDemo from './components/calendarDemo';
import GDemo from './components/gDemo';
import { Space, Flex } from 'antd';
import { MyContext } from './MyContext';


/**
 * HomePage Component 
 */
const HomePage: React.FC = () => {
  const [color, setColor] = useState(10);
  return (
    <PageContainer className={styles.container} header={{title: "", breadcrumb: ""}}>
      <Space size="small" direction="vertical">
        <MyContext.Provider value={{color}}>
          <BusinessCard />
          <FilterBox />
          <MetricLine />
          <CalendarDemo />
          <HomeRow />
        </MyContext.Provider>
        {/* <GDemo /> */}
      </Space>
    </PageContainer>
  );
};

export default HomePage;