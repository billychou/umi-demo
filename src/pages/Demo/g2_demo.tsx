import G2BarDemo from '@/components/G2BarDemo';
import { Flex } from 'antd';
import React from 'react';

export default function G2DemoPage() {
  return (
    <Flex gap={10}>
      <G2BarDemo />
      <G2BarDemo />
    </Flex>
  );
}
