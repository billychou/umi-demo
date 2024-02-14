import { PageContainer } from '@ant-design/pro-components';
import { Space } from 'antd';
import React, { useState } from 'react';
import BusinessCard from './components/businessCard';
import CalendarDemo from './components/calendarDemo';
import FilterBox from './components/formSelect';
import HomeRow from './components/homeRow';
import MetricLine from './components/metricLine';
import styles from './index.less';
import { MyContext } from './MyContext';

/**
 * HomePage Component
 */
const HomePage: React.FC = () => {
  const [color, setColor] = useState(10);
  return (
    <PageContainer
      className={styles.container}
      header={{ title: '', breadcrumb: '' }}
    >
      <MyContext.Provider value={{ color }}>
        <Space size="small" direction="vertical">
          <BusinessCard />
          <FilterBox />
          <MetricLine />
          <CalendarDemo />
          <HomeRow />
          {/* <GDemo /> */}
        </Space>
      </MyContext.Provider>
    </PageContainer>
  );
};

export default HomePage;
