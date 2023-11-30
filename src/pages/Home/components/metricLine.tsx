import { useEffect } from 'react';
import { Chart } from '@antv/g2';
import dayjs from 'dayjs';

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
}

const lineData = generateLineData();

const MetricLine: React.FC = () => {
  useEffect(() => {
    const chart = new Chart({
      container: 'container',
    });
    chart.options({
      type: 'line',
      autoFit: true,
      data: lineData,
      encode: {
        x: 'key',
        y: 'value'
      },
      // axis: {
        // x: {
        // }
      // }
    });
    chart.render();
  }, []);
  return (
    <div id="container"></div>
  );
}

export default MetricLine;