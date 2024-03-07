import { Line } from '@ant-design/plots';
import { ProCard } from '@ant-design/pro-components';
import React from 'react';
import { data } from './data';
const config = {
  data: data,
  xField: 'Date',
  yField: 'Low',
  // colorField: 'type',
  // axis: {
  //   x: { labelAutoHide: 'greedy' },
  // },
  // annotations: [
  //   {
  //     type: 'text',
  //     data: [new Date('2017-12-17'), 100],
  //     style: {
  //       text: '2014-03, 受比特币影响，blockchain 1834',
  //       wordWrap: true,
  //       wordWrapWidth: 164,
  //       dx: -174,
  //       dy: 30,
  //       fill: '#2C3542',
  //       fillOpacity: 0.65,
  //       fontSize: 10,
  //       background: true,
  //       backgroundRadius: 2,
  //       connector: true,
  //       startMarker: true,
  //       startMarkerFill: '#2C3542',
  //       startMarkerFillOpacity: 0.65,
  //     },
  //     tooltip: false,
  //   },
  // ],
};

const MetricLine: React.FC = () => {
  return (
    <ProCard>
      <Line {...config} />
    </ProCard>
  );
};

export default MetricLine;
