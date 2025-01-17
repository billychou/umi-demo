import { Graph } from '@antv/x6';
import { Stencil } from '@antv/x6-plugin-stencil';
import React, { useEffect, useRef } from 'react';

import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => ({
  container: {
    display: 'flex',
    width: '100%',
    height: '100vh',
  },
  stencil: {
    width: '200px',
    height: '100%',
    position: 'relative',
    background: token.colorBgContainer,
    borderRight: `1px solid ${token.colorBorder}`,
  },
  graph: {
    flex: 1,
    height: '100%',
    background: token.colorBgLayout,
  },
}));

const GraphEditor: React.FC = () => {
  const { styles } = useStyles();
  const graphRef = useRef<Graph>();
  const stencilRef = useRef<Stencil>();
  const stencilContainerRef = useRef<HTMLDivElement>(null);
  const graphContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!graphContainerRef.current || !stencilContainerRef.current) return;

    // 初始化画布
    const graph = new Graph({
      container: graphContainerRef.current,
      grid: true,
      mousewheel: {
        enabled: true,
        modifiers: ['ctrl', 'meta'],
      },
      connecting: {
        router: 'manhattan',
        connector: {
          name: 'rounded',
          args: {
            radius: 8,
          },
        },
        anchor: 'center',
        connectionPoint: 'anchor',
        allowBlank: false,
        snap: {
          radius: 20,
        },
        createEdge() {
          return new Shape.Edge({
            attrs: {
              line: {
                stroke: '#5F95FF',
                strokeWidth: 1,
                targetMarker: {
                  name: 'classic',
                  size: 8,
                },
              },
            },
          });
        },
      },
    });

    // 初始化 Stencil
    const stencil = new Stencil({
      title: '节点类型',
      target: graph,
      stencilGraphWidth: 180,
      stencilGraphHeight: 180,
      collapsable: true,
      groups: [
        {
          title: '基础节点',
          name: 'basic',
        },
        {
          title: '系统节点',
          name: 'system',
        },
      ],
      search: {
        placeholder: '搜索节点',
      },
    });

    // 创建基础节点
    const rect = graph.createNode({
      shape: 'rect',
      width: 100,
      height: 40,
      label: '基础节点',
      attrs: {
        body: {
          fill: '#efdbff',
          stroke: '#9254de',
          strokeWidth: 1,
        },
      },
    });

    // stencilContainerRef.current.appendChild(stencil.container);
    const circle = graph.createNode({
      shape: 'circle',
      width: 60,
      height: 60,
      label: '圆形节点',
      attrs: {
        body: {
          fill: '#ffa940',
          stroke: '#ffd591',
          strokeWidth: 1,
        },
      },
    });

    stencilContainerRef.current.appendChild(stencil.container);
    // 添加节点到 Stencil
    stencil.load([rect, circle], 'basic');

    graphRef.current = graph;
    stencilRef.current = stencil;

    return () => {
      graph.dispose();
      stencil.dispose();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div ref={stencilContainerRef} className={styles.stencil} />
      <div ref={graphContainerRef} className={styles.graph} />
    </div>
  );
};

export default GraphEditor;
