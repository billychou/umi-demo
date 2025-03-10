/**
 * Author  Zhou Songchuan
 */
import { ExtensionCategory, Graph, register } from '@antv/g6';
import { GNode } from '@antv/g6-extension-react';
import React, { useRef } from 'react';
import { AntLine } from './components/AntLine';
import { AppNode } from './components/AppNode';
import { appData } from './data';

import { useFullscreen, useMount } from 'ahooks';

import { createStyles } from 'antd-style';

// register(ExtensionCategory.NODE, 'react', ReactNode);
register(ExtensionCategory.NODE, 'g', GNode);
register(ExtensionCategory.EDGE, 'ant-line', AntLine);

const useStyles = createStyles(({ token, css }) => ({
  container: {
    backgroundColor: token.blue1,
    width: '100%',
    height: '100%',
  },
}));

const G6Demo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(containerRef);

  const { styles } = useStyles();
  const graph = null;
  useMount(() => {
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
            lineDash: [5, 5],
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
  });
  return (
    <div>
      <div ref={containerRef} className={styles.container}></div>
      <div>
        <button style={{ marginRight: '8px' }} onClick={toggleFullscreen}>
          ahooks toggleFullscreen
        </button>
      </div>
    </div>
  );
};

export default G6Demo;
