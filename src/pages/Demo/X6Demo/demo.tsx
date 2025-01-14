import { Graph } from '@antv/x6';
import { Stencil } from '@antv/x6-plugin-stencil';
import React, { useEffect, useRef } from 'react';

const X6Demo: React.FC = () => {
  const graphContainerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<Graph>();
  const stencilRef = useRef<Stencil>();

  useEffect(() => {
    const graph = new Graph({
      container: graphContainerRef.current!,
      width: window.innerWidth,
      height: window.innerHeight,
      background: {
        color: '#F2F7FA',
      },
      grid: true,
    });

    const stencil = new Stencil({
      target: graph,
      groups: [
        {
          name: 'group1',
        },
        {
          name: 'group2',
        },
      ],
    });

    const rect1 = graph.createNode({
      shape: 'rect',
      width: 100,
      height: 40,
    });

    const rect2 = rect1.clone();

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
    graph.centerContent();
  }, []);
  return (
    <div>
      <div ref={graphContainerRef} />
    </div>
  );
};

export default X6Demo;
