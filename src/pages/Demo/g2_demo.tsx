import G2BarDemo from '@/components/G2BarDemo';
import G2LineDemo from '@/components/G2LineDemo';
import { ProCard } from '@ant-design/pro-components';
import { Flex } from 'antd';
import React from 'react';

export default function G2DemoPage() {
  return (
    <Flex gap={10}>
      <ProCard>
        <G2BarDemo />
      </ProCard>
      <ProCard>
        <G2LineDemo />
      </ProCard>
    </Flex>
  );
}
