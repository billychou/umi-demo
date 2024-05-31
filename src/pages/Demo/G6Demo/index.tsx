/**
 * Author  Zhou Songchuan
 */
import { ProCard } from '@ant-design/pro-components';
import { ExtensionCategory, Graph, register } from '@antv/g6';
import { GNode } from '@antv/g6-extension-react';
import { Flex } from 'antd';
import React, { useEffect, useRef } from 'react';
import { AntLine } from './components/AntLine';
import { AppNode } from './components/AppNode';
import { appData } from './data';

// register(ExtensionCategory.NODE, 'react', ReactNode);
register(ExtensionCategory.NODE, 'g', GNode);
register(ExtensionCategory.EDGE, 'ant-line', AntLine);
/**
 * React.FC
 * @returns
 */
const G6Demo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const graph = null;
  useEffect(() => {
    if (!graph) {
      const graph = new Graph({
        container: containerRef.current!,
        width: window.innerWidth,
        height: window.innerHeight,
        data: appData,
        node: {
          type: 'g',
          style: {
            size: [180, 60],
            component: (data: any) => <AppNode data={data} size={[180, 60]} />,
          },
        },
        edge: {
          type: 'ant-line',
          style: {
            stroke: 'red',
            lineDash: [10, 10],
            endArrow: true,
          },
        },
        behaviors: ['drag-element', 'zoom-canvas', 'drag-canvas'],
        layout: {
          type: 'dagre',
          rankdir: 'LR',
          nodesepFunc: () => 1,
          ranksepFunc: () => 1,
        },
      });
      graph.render();
    }
  }, []);
  return (
    <Flex vertical={false}>
      <ProCard>Pannel</ProCard>
      <ProCard>
        <div ref={containerRef}></div>
      </ProCard>
    </Flex>
  );
};

export default G6Demo;
