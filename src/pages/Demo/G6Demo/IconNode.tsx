import { Graph } from '@antv/g6';
import { useFullscreen, useRequest } from 'ahooks';
import React, { useEffect, useRef } from 'react';

import { getLinkData } from '@/services/link';

const style = document.createElement('style');
style.innerHTML = `@import '/icons/iconfont.css'`;
document.head.appendChild(style);

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

const IconNode: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<Graph | null>(null);
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(containerRef);

  const { styles } = useStyles();
  const { data, run, error, loading } = useRequest(getLinkData, {
    defaultParams: ['cbs'],
    pollingInterval: 10000,
  });

  useEffect(() => {
    if (data && !loading && containerRef.current) {
      console.log(data);
      if (graphRef.current) {
        graphRef.current.destroy();
      }
      graphRef.current = new Graph({
        container: containerRef.current!,
        data: data.data,
        node: {
          type: (d) => {
            const {
              data: { label, level, node_type },
            } = d;
            if (node_type === 'app') {
              return 'html';
            } else if (node_type === 'third') {
              return 'circle';
            }
            return 'html';
          },
          style: {
            size: [180, 60],
            dx: -120,
            dy: -40,
            labelText: (d) => {
              const {
                data: { label, status },
              } = d;
              return label;
            },
            iconFontFamily: 'iconfont',
            iconText: '\ue6cc',
            innerHTML: (d) => {
              const {
                data: { label, status, level },
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
                      ${label}
                    </div>
                  </div>
                  <div>
                    <span style="border: 1px solid white; padding: 2px;">
                      ${level}
                    </span>
                  </div>
                </div>`;
            },
          },
        },
        layout: {
          type: 'dagre',
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
      graphRef.current.render();
    }
  }, [data, loading]);

  useEffect(() => {
    return () => {
      if (graphRef.current) {
        graphRef.current.destroy();
      }
    };
  }, []);
  if (loading) {
    return <div>加载中...</div>;
  }

  if (error) {
    return <div>加载出错: {error.message}</div>;
  }

  return (
    <>
      <div ref={containerRef} className={styles.container} />
    </>
  );
};

export default IconNode;
