import React from 'react';

import type { ProColumns } from '@ant-design/pro-components';
import { ProCard, ProTable } from '@ant-design/pro-components';

type RecordType = {
  progress: number;
  status: string;
  value: number;
  nodeType: string;
};

const ProDemo: React.FC = () => {
  const dataSource = [
    { progress: 60, status: 'error', value: 0.12, nodeType: 'vm', key: 0 },
    {
      progress: 100,
      status: 'success',
      value: 3.12344,
      nodeType: 'container',
      key: 1,
    },
  ];
  const columns: ProColumns<RecordType>[] = [
    {
      title: '状态',
      key: 'status',
      dataIndex: 'status',
      valueType: 'text',
      filters: [
        {
          text: '成功',
          value: 'success',
        },
        {
          text: '失败',
          value: 'error',
        },
      ],
      onFilter: (value, record) => {
        console.log('************');
        console.log(value);
        return record.status === 'error';
      },
    },
    {
      title: '进度',
      key: 'progress',
      dataIndex: 'progress',
      valueType: (item) => ({
        type: 'progress',
        status: item.status !== 'error' ? 'active' : 'exception',
      }),
    },
    {
      title: '数值',
      key: 'value',
      dataIndex: 'value',
      valueType: 'percent',
    },
    {
      title: '节点类型',
      key: 'nodeType',
      dataIndex: 'nodeType',
      valueEnum: {
        vm: {
          text: '虚拟机',
          color: 'green',
        },
        container: {
          text: '容器',
          color: 'red',
        },
      },
    },
  ];
  return (
    <div>
      <ProCard>
        <ProTable search={false} columns={columns} dataSource={dataSource} />
      </ProCard>
    </div>
  );
};

export default ProDemo;
