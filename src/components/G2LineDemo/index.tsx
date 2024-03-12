import { getMetrics } from '@/services/metrics';
import { ProCard } from '@ant-design/pro-components';
import { Chart } from '@antv/g2';
import { useRequest } from '@umijs/max';
import { Space } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useRef, useState } from 'react';

// const data = await getMetrics();

const G2LineDemo: React.FC = () => {
  const [datasource, setDatasource] = useState<any>([]);
  const container = useRef(null);
  const chart = useRef(null);
  const { data, loading, error } = useRequest(getMetrics, {
    timeout: 20000,
    onSuccess: (result, params) => {
      console.log('onSuccess');
    },
    formatResult: (res) => {
      chart.current.changeData(res);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  useEffect(() => {
    if (!chart.current) {
      // chart.current = renderLineChart(container.current);
      let myChart = new Chart({
        container: container.current,
        autoFit: true,
      });
      myChart.options({
        type: 'line',
        data: [],
        encode: {
          x: {
            type: 'transform',
            value: (d) => {
              return new Date(d.time);
            },
          },
          y: {
            type: 'field',
            value: 'value',
          },
          color: {
            type: 'field',
            value: 'field',
          },
        },
        // scale: {
        //   x: {
        //     alias: '时间',
        //   },
        //   y: {
        //     alias: '值',
        //   },
        // },
        axis: {
          x: {
            title: '时间',
            tickCount: 40,
            labelFormatter: (d) => {
              return dayjs(d).format('HH:mm');
            },
          },
        },
      });
      myChart.render();
      chart.current = myChart;
    }
  });

  const extraFilter = <div>welcome</div>;
  const toolbarTip = <div>toolbar</div>;
  const extraGen = () => {
    return (
      <Space.Compact>
        {extraFilter}
        {toolbarTip}
      </Space.Compact>
    );
  };

  return (
    <ProCard title="lineChart">
      <div ref={container}></div>
      {/* <button onClick={() => updateLineChart(chart.current)} type="button"> */}
      {/* 更新数据
      </button> */}
    </ProCard>
  );
};

export default G2LineDemo;
