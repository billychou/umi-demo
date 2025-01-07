import { Graph } from '@antv/g6';
import { useFullscreen, useMount } from 'ahooks';
import React, { useEffect, useRef } from 'react';

import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    container: {
      width: '100%',
      height: '100%',
      background: token.colorBgLayout,
    },
  };
});

const iconFont = document.createElement('script');
iconFont.src = '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js';
document.head.appendChild(iconFont);

type Status = 'error' | 'overload' | 'running';

const ICON_MAP: Record<Status, string> = {
  error: '&#10060;',
  overload: '&#9889;',
  running: '&#9989;',
};

const COLOR_MAP: Record<Status, string> = {
  error: '#f5222d',
  overload: '#faad14',
  running: '#52c41a',
};

const HtmlNode: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(containerRef);

  const { styles } = useStyles();

  useEffect(() => {
    console.log('html g6');
  }, []);

  useMount(() => {
    console.log('html g6');
    const graph = new Graph({
      container: containerRef.current!,
      data: {
        nodes: [
          {
            id: 'node-1',
            data: {
              location: '个人手机银行-MBS',
              status: 'error',
              ip: 'A+',
            },
          },
          {
            id: 'node-2',
            data: {
              location: '核心业务系统-CBS',
              status: 'overload',
              ip: 'B',
            },
          },
          {
            id: 'node-3',
            data: {
              location: '渠道中台系统-ECP',
              status: 'running',
              ip: 'C',
            },
          },
        ],
      },
      node: {
        type: 'html',
        style: {
          size: [180, 60],
          dx: -120,
          dy: -40,
          innerHTML: (d) => {
            const {
              data: { location, status, ip },
            } = d;
            const color = COLOR_MAP[status];
            return `
<div 
  style="
    width:100%; 
    height: 100%; 
    background: ${color}bb; 
    border: 1px solid ${color};
    color: #fff;
    user-select: none;
    display: flex; 
    padding: 10px;
    "
>
  <div style="display: flex;flex-direction: column;flex: 1;">
    <div style="font-weight: bold;">
      ${location}
    </div>
  </div>
  <div>
    <span style="border: 1px solid white; padding: 2px;">
      ${ip}
    </span>
  </div>
</div>`;
          },
        },
      },
      layout: {
        type: 'grid',
      },
      behaviors: ['drag-element', 'zoom-canvas'],
      plugins: [
        {
          type: 'toolbar',
          position: 'right-top',
          onClick: (item) => {
            // alert('item clicked:' + item);
            toggleFullscreen();
          },
          getItems: () => {
            return [
              { id: 'icon-xinjian', value: 'new' },
              { id: 'icon-fenxiang', value: 'share' },
              { id: 'icon-chexiao', value: 'undo' },
            ];
          },
        },
      ],
    });
    graph.render();
  });

  return (
    <>
      <div ref={containerRef} className={styles.container} />
    </>
  );
};

export default HtmlNode;
