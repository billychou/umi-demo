import { ProCard } from '@ant-design/pro-components';
import React, { useEffect, useRef } from 'react';

import { ExtensionCategory, Graph, register } from '@antv/g6';
import { GNode } from '@antv/g6-extension-react';
import { AppNode } from './components/AppNode';
import { appData } from './data';

register(ExtensionCategory.NODE, 'g', GNode);

const G6Demo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const graph = new Graph({
      container: containerRef.current!,
      data: appData,
      node: {
        type: 'g',
        style: {
          size: [90, 60],
          component: (data) => <AppNode data={data} size={[180, 60]} />,
        },
      },
      behaviors: ['drag-element', 'zoom-canvas', 'drag-canvas'],
      layout: {
        type: 'dagre',
        rankdir: 'LR',
        nodesep: 40,
        ranksep: 100,
        controlPoints: true,
      },
    });
    graph.render();
  }, []);

  return (
    <ProCard title="G6Demo">
      <div ref={containerRef}></div>
    </ProCard>
  );
};

export default G6Demo;
