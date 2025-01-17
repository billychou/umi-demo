import { Graph } from '@antv/x6';
import React, { useEffect, useRef } from 'react';

import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    container: {
      width: '100%',
      height: '100%',
      background: token.colorBgContainer,
    },
  };
});

Graph.registerNode('custom-node', {
  inherit: 'rect',
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'img',
    },
    {
      tagName: 'text',
      selector: 'label',
    },
  ],
  attrs: {
    body: {
      stroke: '#8f8f8f',
      strokeWidth: 1,
      fill: '#fff',
    },
    img: {
      'xlink:href':
        'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
      width: 16,
      height: 16,
      x: 12,
      y: 12,
    },
  },
});

const CustomNode: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { styles } = useStyles();

  useEffect(() => {
    const graph = new Graph({
      container: containerRef.current!,
      background: {
        color: '#F2F7FA',
      },
      width: 800,
      height: 600,
      grid: true,
    });
    const source = graph.addNode({
      shape: 'custom-node',
      x: 32,
      y: 32,
      width: 100,
      height: 40,
      label: 'hello',
    });
    const target = graph.addNode({
      shape: 'custom-node',
      x: 160,
      y: 32,
      width: 100,
      height: 40,
      label: 'world',
    });
    graph.addEdge({
      source,
      target,
      attrs: {
        line: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
        },
      },
    });
  }, []);
  return <div ref={containerRef}>hello</div>;
};

export default CustomNode;
