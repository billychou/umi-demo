import { ProCard } from '@ant-design/pro-components';
import { Chart } from '@antv/g2';
import { Space } from 'antd';
import React, { useEffect, useRef } from 'react';

const G2LineDemo: React.FC = () => {
  const container = useRef(null);
  const chart = useRef(null);

  useEffect(() => {
    if (!chart.current) {
      chart.current = renderLineChart(container.current);
    }
  }, []);

  function renderLineChart(container) {
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
      },
    });
    chart.render();
    return chart;
  }

  function updateLineChart(chart) {
    const interval = chart.getNodesByType('interval')[0];
    const newData = interval
      .data()
      .map((d) => ({ ...d, sold: Math.random() * 400 + 100 }));
    interval.data(newData);
    chart.render();
  }

  const extraFilter = <div>welcome</div>;
  const toolbarTip = <div>toolbar</div>;
  const extraGen = () => {
    return (
      <Space.Compact>
        {extraFilter}
        {toolbarTip}
      </Space.Compact>
    );
  };

  return (
    <ProCard title="lineChart" extra={extraGen()}>
      <div ref={container}></div>
      <button onClick={() => updateLineChart(chart.current)} type="button">
        更新数据
      </button>
    </ProCard>
  );
};

export default G2LineDemo;
