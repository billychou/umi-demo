import { ProCard } from '@ant-design/pro-components';
import { Chart } from '@antv/g2';
import dayjs from 'dayjs';
import { useEffect, useRef } from 'react';

const generateLineData = () => {
  const result = [];
  const now = dayjs().valueOf();
  const start = dayjs().subtract(1, 'day').valueOf();
  for (let i = start; i < now; i += 60 * 1000) {
    let value = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    result.push({
      key: i,
      value,
    });
  }
  return result;
};

const lineData = generateLineData();

const config = {
  type: 'line',
  data: {
    type: 'inline',
    value: lineData,
  },
  encode: {
    x: 'key',
    y: 'value',
  },
  interaction: {
    tooltip: {
      marker: false,
    },
  },
  axis: {
    x: {
      type: 'timeCat',
      title: '时间',
      tick: true,
      label: true,
      line: true,
      tickCount: 5,
    },
    y: {
      title: '交易量',
    },
  },
  scale: {
    x: {
      padding: 10,
    },
    y: {},
  },
  style: {
    lineWidth: 2,
  },
};

const MetricLine: React.FC = () => {
  const container = useRef(null);
  const chart = useRef(null);

  /**
   * useEffect
   */
  useEffect(() => {
    if (!chart.current) {
      chart.current = initChart(container.current);
    }
  }, []);

  /**
   * 初始化图表
   * @param container
   */
  const initChart = (container) => {
    console.log('initChart');
    const chart = new Chart({
      container,
      autoFit: true,
    });
    chart.options(config);
    chart.render();
    return chart;
  };

  const updateChart = () => {};

  return (
    <ProCard>
      <div ref={container}></div>
    </ProCard>
  );
};

export default MetricLine;
