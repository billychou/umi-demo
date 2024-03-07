import { Line } from '@ant-design/plots';
import { ProCard } from '@ant-design/pro-components';
import React from 'react';

// const generateLineData = () => {
//   const result = [];
//   const now = dayjs().valueOf();
//   const start = dayjs().subtract(1, 'day').valueOf();
//   for (let i = start; i < now; i += 60 * 1000) {
//     let value = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
//     result.push({
//       key: i,
//       value,
//     });
//   }
//   return result;
// };

// const lineData = generateLineData();

const config = {
  data: {
    type: 'fetch',
    value:
      'https://gw.alipayobjects.com/os/antvdemo/assets/data/blockchain.json',
    transform: [
      {
        type: 'fold',
        fields: ['blockchain', 'nlp'],
        key: 'type',
        value: 'value',
      },
    ],
  },
  xField: (d) => new Date(d.date),
  yField: 'value',
  colorField: 'type',
  axis: {
    x: { labelAutoHide: 'greedy' },
  },
  annotations: [
    {
      type: 'text',
      data: [new Date('2017-12-17'), 100],
      style: {
        text: '2014-03, 受比特币影响，blockchain 1834',
        wordWrap: true,
        wordWrapWidth: 164,
        dx: -174,
        dy: 30,
        fill: '#2C3542',
        fillOpacity: 0.65,
        fontSize: 10,
        background: true,
        backgroundRadius: 2,
        connector: true,
        startMarker: true,
        startMarkerFill: '#2C3542',
        startMarkerFillOpacity: 0.65,
      },
      tooltip: false,
    },
  ],
};

//const config = {
//  type: 'line',
//  data: {
//    type: 'inline',
//    value: lineData,
//  },
//  encode: {
//    x: 'key',
//    y: 'value',
//  },
//  interaction: {
//    tooltip: {
//      marker: false,
//    },
//  },
//  axis: {
//    x: {
//      type: 'timeCat',
//      title: '时间',
//      tick: true,
//      label: true,
//      line: true,
//      tickCount: 5,
//    },
//    y: {
//      title: '交易量',
//    },
//  },
//  scale: {
//    x: {
//      padding: 10,
//    },
//    y: {},
//  },
//  style: {
//    lineWidth: 2,
//  },
//};

const MetricLine: React.FC = () => {
  // const container = useRef(null);
  // const chart = useRef(null);

  // /**
  //  * useEffect
  //  */
  // useEffect(() => {
  //   if (!chart.current) {
  //     chart.current = initChart(container.current);
  //   }
  // }, []);

  // /**
  //  * 初始化图表
  //  * @param container
  //  */
  // const initChart = (container) => {
  //   const chart = new Chart({
  //     container,
  //     autoFit: true,
  //   });
  //   chart.options(config);
  //   chart.render();
  //   return chart;
  // };

  // const updateChart = () => {};

  // return (
  //   <ProCard>
  //     <div ref={container}></div>
  //   </ProCard>
  // );
  return (
    <ProCard>
      <Line {...config} />
    </ProCard>
  );
};

export default MetricLine;
