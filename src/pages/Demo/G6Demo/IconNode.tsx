import { ProDescriptions } from '@ant-design/pro-components';
import { Graph, NodeEvent } from '@antv/g6';
import { useFullscreen, useRequest } from 'ahooks';
import { Drawer } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import { getIcon } from '@/utils/tool';

import { getLinkData } from '@/services/link';

const style = document.createElement('style');
style.innerHTML = `@import '/icons/iconfont.css'`;
document.head.appendChild(style);

const iconFontJs = document.createElement('script');
iconFontJs.src = '/icons/iconfont.js';
document.head.appendChild(iconFontJs);

import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    container: {
      width: '100%',
      height: '100%',
      background: token.colorBgLayout,
      margin: '20px',
    },
  };
});

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
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedNode, setSelectedNode] = useState<any>(null);

  const { styles } = useStyles();
  const { data, run, error, loading } = useRequest(getLinkData, {
    defaultParams: ['cbs'],
    pollingInterval: 30000,
  });

  const handleNodeClick = (nodeId: any) => {
    const nodeData = graphRef.current?.getNodeData(nodeId);
    setSelectedNode(nodeData);
    setDrawerVisible(true);
  };

  useEffect(() => {
    if (data && !loading && containerRef.current) {
      console.log(data);
      if (graphRef.current) {
        graphRef.current.destroy();
      }
      graphRef.current = new Graph({
        container: containerRef.current!,
        width: window.innerWidth,
        height: window.innerHeight,
        autoFit: 'center',
        autoResize: true,
        data: data.data,
        edge: {
          type: 'polyline',
          style: {
            stroke: '#1890ff',
            lineDash: [5, 5],
            endArrow: true,
            router: {
              type: 'orth',
            },
          },
        },
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
          palette: 'spectral',
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
            iconText: getIcon('shoujiyinhang'),
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
          align: 'UL',
          rankdir: 'LR',
          nodesep: 50,
          ranksep: 100,
        },
        behaviors: [
          'drag-element',
          'zoom-canvas',
          'drag-canvas',
          'hover-activate',
        ],
        plugins: [
          {
            type: 'toolbar',
            position: 'right-top',
            onClick: (item) => {
              console.log(item);
              toggleFullscreen();
            },
            getItems: () => {
              return [
                // { id: 'icon-xinjian', value: 'new' },
                // { id: 'icon-fenxiang', value: 'share' },
                // { id: 'icon-chexiao', value: 'undo' },
                { id: 'icon-shoujiyinhang', value: 'mobile' },
              ];
            },
          },
        ],
      });
      graphRef.current.render();
      graphRef.current.on(NodeEvent.CLICK, (evt: any) => {
        console.log(evt);
        console.log(evt.target);
        const nodeId = evt.target.id;
        handleNodeClick(nodeId);
      });
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

      <Drawer
        title="节点详情"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        width={400}
      >
        {selectedNode && (
          <ProDescriptions
            column={1}
            title={false}
            dataSource={selectedNode}
            columns={[
              {
                title: '节点ID',
                key: 'id',
                dataIndex: 'id',
              },
              {
                title: '节点名称',
                key: 'data.label',
                dataIndex: ['data', 'label'],
              },
              {
                title: '节点类型',
                key: 'data.node_type',
                dataIndex: ['data', 'node_type'],
                valueEnum: {
                  app: { text: '应用节点', status: 'Success' },
                  third: { text: '第三方节点', status: 'Warning' },
                },
              },
              {
                title: '状态',
                key: 'data.status',
                dataIndex: ['data', 'status'],
                valueEnum: {
                  running: { text: '运行中', status: 'Success' },
                  error: { text: '错误', status: 'Error' },
                  overload: { text: '过载', status: 'Warning' },
                },
              },
              {
                title: '级别',
                key: 'data.level',
                dataIndex: ['data', 'level'],
              },
            ]}
          />
        )}
      </Drawer>
    </>
  );
};

export default IconNode;
