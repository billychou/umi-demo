import { Graph } from '@antv/x6';
import React, { useEffect } from 'react';

const X6Demo: React.FC = () => {
  useEffect(() => {
    const graph = new Graph({
      container: document.getElementById('container')!,
      width: 800,
      height: 600,
      grid: true,
    });

    graph.addNode({
      x: 32,
      y: 32,
      width: 100,
      height: 40,
      attrs: {
        body: {
          stroke: '#8f8f8f',
          fill: '#e6ffe6',
        },
      },
    });

    graph.addNode({
      x: 160,
      y: 32,
      width: 100,
      height: 40,
      attrs: {
        body: {
          stroke: '#8f8f8f',
        },
      },
    });
  }, []);
  return (
    <div>
      <div id="container" />
    </div>
  );
};

export default X6Demo;
