import G2BarDemo from '@/components/G2BarDemo';
import G2LineDemo from '@/components/G2LineDemo';
import { Flex } from 'antd';
import React from 'react';

export default function G2DemoPage() {
  return (
    <Flex vertical gap={10}>
      <G2BarDemo />
      <G2LineDemo />
    </Flex>
  );
}
