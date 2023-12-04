import dayjs from 'dayjs';
import { ProCard } from '@ant-design/pro-components';
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
  /**
   * G2中的数据只要用于指定需要可视化的数据和进行数据转换, 也就是数据的预处理
   */
  data: {
    type: 'inline',
    value: lineData,
    transform: [
      {
        type: 'filter',
        callback: (d) => {
          return d;
        }
      }
    ]
  },
  encode: {
   // x: i => dayjs(i.key).format('HH:mm'),
    x: 'key',
    y: 'value'
  },
  interaction: {
    tooltip: {
      marker: false,
    },
  },
  axis: {
    x: {
      type: "timeCat",
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
    },
    y: {

    }
  },
  style: {
    lineWidth: 2,
  },
};
const MetricLine: React.FC = () => {
  return (
    <ProCard>
      <Line {...config}></Line>
    </ProCard>
  );
}

export default MetricLine;