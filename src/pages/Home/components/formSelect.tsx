import { ProCard } from '@ant-design/pro-components';
import { Button, DatePicker, Space } from 'antd';
import React from 'react';

const FilterBox: React.FC = () => {
  return (
    <ProCard>
      <Space.Compact size="small" style={{ float: 'right' }}>
        <DatePicker />
        <Button type="primary">查询</Button>
      </Space.Compact>
    </ProCard>
  );
};

export default FilterBox;
