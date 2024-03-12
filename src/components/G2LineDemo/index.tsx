import { getMetrics } from '@/services/metrics';
import { ProCard } from '@ant-design/pro-components';
import { Chart } from '@antv/g2';
import { useRequest } from '@umijs/max';
import { Button, Space } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useRef, useState } from 'react';

const G2LineDemo: React.FC = () => {
  const [datasource, setDatasource] = useState<any>([]);
  const container = useRef(null);
  const chart = useRef(null);
  const { data, loading, error, run } = useRequest(getMetrics, {
    timeout: 20000,
    defaultParams: [{ interval: 1 }],
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
  const dayOnClick = (hour: number) => {
    run({ interval: hour });
  };
  const extraFilter = (
    <>
      <Button onClick={() => dayOnClick(1)} size="small">
        1h
      </Button>
      <Button onClick={() => dayOnClick(6)} size="small">
        6h
      </Button>
      <Button onClick={() => dayOnClick(24)} size="small">
        1d
      </Button>
      <Button onClick={() => dayOnClick(24 * 3)} size="small">
        3d
      </Button>
      <Button onClick={() => dayOnClick(24 * 7)} size="small">
        7d
      </Button>
    </>
  );
  const toolbarTip = <div>toolbar</div>;
  const extraGen = () => {
    return <Space.Compact>{extraFilter}</Space.Compact>;
  };

  return (
    <ProCard title="lineChart" extra={extraGen()} bordered>
      <div ref={container}></div>
    </ProCard>
  );
};

export default G2LineDemo;
