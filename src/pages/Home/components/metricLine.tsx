import { useEffect } from 'react';
import { ProCard } from "@ant-design/pro-components";
import { Chart } from '@antv/g2';
import dayjs from 'dayjs';

/**
 * 生成指标数据
 */
const generateLineData = () => {
  const result = [];
  const now = dayjs().valueOf();
  const start = dayjs().subtract(1, 'day').valueOf(); 
  for (let i=start; i<now; i+=60*1000) {
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
    useEffect(()=>{
        const chart = new Chart({
          container: 'container',
          autoFit: true,
        });
        chart.line().data(
          {
            type: 'line',
            data: lineData,
            xField: 'key',
            yField: 'value',
            seriesField: 'key',
            smooth: true,
          }
        ).encode('x', 'date').encode('y', 'value');
        chart.render();
    }, []);
    return (<ProCard>
       <div id="container"></div>
    </ProCard>);
}

export default MetricLine;