import { Line } from '@ant-design/plots';
import { ProCard } from '@ant-design/pro-components';
import dayjs from 'dayjs';
import React from 'react';

import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => {
  return {
    filter1: {
      // height: '10px',
    },
  };
});

let data = [];
let now = dayjs();
let lastDays = now.subtract(2, 'days');
let minutes = now.diff(lastDays, 'minutes');
for (let i = 0; i < minutes; i++) {
  console.log(i);
  // let start = lastMonth.format("YYYY-MM-DDTHH:mm:00");
  let tTime = lastDays.add(i, 'minutes').format('YYYY-MM-DDTHH:mm:ss');
  data.push({
    time: tTime,
    value: parseFloat(Math.random().toFixed(2)) * 100,
  });
}

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
  const { styles } = useStyles();
  return (
    <ProCard title="CBS" extra="toolbar｜filter">
      {/* <div className={styles.filter1}>filter1</div> */}
      {/* <div>filter2</div> */}
      <Line {...config} />
    </ProCard>
  );
};

export default MetricLine;
