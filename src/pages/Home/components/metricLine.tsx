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

// const data = [
//   { genre: 'Sports', sold: 275 },
//   { genre: 'Strategy', sold: 115 },
//   { genre: 'Action', sold: 120 },
//   { genre: 'Shooter', sold: 350 },
//   { genre: 'Other', sold: 150 },
// ];

// // 初始化图表实例
// const chart = new G2.Chart({
//   container: 'container',
// });

// // 声明可视化
// chart
//   .interval() // 创建一个 Interva 标记
//   .data(data) // 绑定数据
//   .encode('x', 'genre') // 编码 x 通道
//   .encode('y', 'sold'); // 编码 y 通道

// // 渲染可视化
// chart.render();

const MetricLine: React.FC = () => {
    useEffect(() => {
        console.log("hello");
        const chart = new Chart({
          container: 'container',
        });
        // // chart.line().data({
        // //     type: 'line',
        // //     data: lineData,
        // //     xField: 'key',
        // //     yField: 'value',
        // //     seriesField: 'key',
        // //     smooth: true,
        // //   }
        // // ).encode('x', 'date').encode('y', 'value');
        // // chart.point().data({
        // //   type: 'fetch',
        // //   value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/scatter.json'
        // // }).encode('x', 'weight').encode('y', 'height').encode('color', 'gender');
        // // chart.render();
        // chart.options({
        //   type: 'interval',
        //   data: [
        //     { key: 'apple', value: 100 },
        //     { key: 'pearl', value: 500 },
        //   ],
        //   encode: {
        //     x: 'key',
        //     y: 'value',
        //   },
        // });
        chart.render();
    }, []);
    return (<ProCard>
       <div id="container"></div>
    </ProCard>);
}

export default MetricLine;