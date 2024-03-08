import { Line } from '@ant-design/plots';
import { ProCard } from '@ant-design/pro-components';
import dayjs from 'dayjs';
import React from 'react';

// import { data } from './data';
let data = [];
let now = dayjs();
let lastDays = now.subtract(7, 'days');
let minutes = now.diff(lastDays, 'minutes');
for (let i = 0; i < minutes; i++) {
  console.log(i);
  // let start = lastMonth.format("YYYY-MM-DDTHH:mm:00");
  let tTime = lastDays.add(i, 'minutes').format('YYYY-MM-DDTHH:mm:ss');
  console.log(tTime);
  data.push({
    time: tTime,
    value: parseFloat(Math.random().toFixed(2)) * 100,
  });
}
console.log(minutes);
console.log(data);

const config = {
  data: data,
  xField: 'time',
  yField: 'value',
  // seriesField:
  slider: {
    x: {},
  },
  scale: {},
  autoFit: true,
};

const MetricLine: React.FC = () => {
  return (
    <ProCard>
      <Line {...config} />
    </ProCard>
  );
};

export default MetricLine;
