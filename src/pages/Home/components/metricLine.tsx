import dayjs from 'dayjs';
import { Line } from '@ant-design/plots';

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
const config = {
  data: {
    type: 'inline',
    value: lineData
  },
  encode: {
    x: i => dayjs(i.key).format('HH:mm'),
    y: 'value'
  },
  interaction: {
    tooltip: {
      marker: false,
    },
  },
  axis: {
    x: {
      title: "时间",
      tick: true,
      label: true,
      line: true,
      tickCount: 5,
    },
    y: {
      title: "交易量"
    }
  },
  scale: {
    x: {
      padding: 10,
    }
  },
  style: {
    lineWidth: 2,
  },
};
const MetricLine: React.FC = () => {
  return (
    <Line {...config}></Line>
  );
}

export default MetricLine;