import { ProCard } from '@ant-design/pro-components';
import { Chart } from '@antv/g2';
import { useEffect, useRef } from 'react';

export default function G2Demo() {
  const container = useRef(null);
  const chart = useRef(null);

  useEffect(() => {
    if (!chart.current) {
      chart.current = renderBarChart(container.current);
    }
  }, []);

  /**
   * render bar chart
   * @param container
   */
  function renderBarChart(container) {
    const chart = new Chart({
      container,
      theme: 'classic',
    });
    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ];
    chart.options({
      type: 'interval',
      data: data,
      encode: {
        x: 'genre',
        y: 'sold',
        key: 'genre',
      },
      animate: {
        updateDuration: 300,
      },
    });
    chart.render();
    return chart;
  }

  /**
   * update bar chart
   * @param chart
   */
  function updateBarChart(chart) {
    // 获得 Interval Mark
    const interval = chart.getNodesByType('interval')[0];
    // 模拟并且更新 Interval 的数据
    const newData = interval.data().map((d) => ({
      ...d,
      sold: Math.random() * 400 + 100,
    }));
    interval.data(newData);
    // 重新渲染
    chart.render();
  }

  return (
    <ProCard>
      <div ref={container}></div>
      <button onClick={() => updateBarChart(chart.current)}>更新数据</button>
    </ProCard>
  );
}
