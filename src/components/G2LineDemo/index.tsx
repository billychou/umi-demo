import { getMetrics } from '@/services/metrics';
import {
  CommentOutlined,
  DownloadOutlined,
  HeartOutlined,
  LikeOutlined,
  ShareAltOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { Chart } from '@antv/g2';
import { useRequest } from '@umijs/max';
import {
  Button,
  DatePicker,
  DatePickerProps,
  Segmented,
  Select,
  Space,
  Tooltip,
} from 'antd';
import { createStyles } from 'antd-style';
import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useRef } from 'react';

const useStyles = createStyles(({ token, css }) => ({
  filterBox: {
    // textDecoration: 'underline',
    borderBottom: '1px solid #dbdbdb',
  },
  filterBoxText: {
    fontSize: 13,
    padding: 0,
    color: token.optionSelectedColor,
  },
}));

const { RangePicker } = DatePicker;

const G2LineDemo: React.FC = () => {
  const container = useRef(null);
  const chart = useRef(null);
  const { styles } = useStyles();
  const { data, loading, error, run } = useRequest(getMetrics, {
    timeout: 20000,
    defaultParams: [{ interval: 1 }],
    onSuccess: (result, params) => {
      console.log('onSuccess');
    },
    formatResult: (res) => {
      chart.current.changeData(res);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  useEffect(() => {
    if (!chart.current) {
      // chart.current = renderLineChart(container.current);
      let myChart = new Chart({
        container: container.current,
        autoFit: true,
      });
      myChart.options({
        type: 'line',
        data: [],
        encode: {
          x: {
            type: 'transform',
            value: (d) => {
              return new Date(d.time);
            },
          },
          y: {
            type: 'field',
            value: 'value',
          },
          color: {
            type: 'field',
            value: 'field',
          },
        },
        scale: {
          y: { nice: true },
        },
        axis: {
          x: {
            title: '时间',
            tickCount: 40,
            labelFormatter: (d) => {
              return dayjs(d).format('HH:mm');
            },
          },
        },
        interaction: { brushFilter: true },
      });
      myChart.render();
      chart.current = myChart;

      myChart.on('brush:filter', (event) => {
        const { selection } = event.data;
        const [domainX, domainY] = selection;
        const [minX, maxX] = domainX;
        const [minY, maxY] = domainY;
        const start = dayjs(minX).format('YYYY-MM-DDTHH:mm:ssZ');
        const end = dayjs(maxX).format('YYYY-MM-DDTHH:mm:ssZ');
        run({ start, end });
      });
    }
  });

  const dailyOnChange = (value) => {
    run({ interval: value });
  };

  const selectColorRender = (
    <Space.Compact className={styles.filterBox}>
      <div className={styles.filterBoxText}>颗粒度</div>
      <Select
        size="small"
        variant="borderless"
        style={{ flex: 1 }}
        options={[
          { value: '1', label: '1分钟' },
          { value: '5', label: '5分钟' },
          { value: '10', label: '10分钟' },
        ]}
      />
    </Space.Compact>
  );
  const dailyFilter = (
    <Segmented
      size="small"
      onChange={dailyOnChange}
      options={[
        { label: '1h', value: 1 },
        { label: '3h', value: 3 },
        { label: '6h', value: 6 },
        { label: '1d', value: 24 },
        { label: '3d', value: 24 * 3 },
        { label: '7d', value: 24 * 7 },
      ]}
    />
  );

  const toolbarRender = (
    <Space.Compact>
      <Tooltip title="Like">
        <Button icon={<LikeOutlined />} size="small" type="text" />
      </Tooltip>
      <Tooltip title="Comment">
        <Button icon={<CommentOutlined />} size="small" type="text" />
      </Tooltip>
      <Tooltip title="Star">
        <Button icon={<StarOutlined />} size="small" type="text" />
      </Tooltip>
      <Tooltip title="Heart">
        <Button icon={<HeartOutlined />} size="small" type="text" />
      </Tooltip>
      <Tooltip title="Share">
        <Button icon={<ShareAltOutlined />} size="small" type="text" />
      </Tooltip>
      <Tooltip title="Download">
        <Button icon={<DownloadOutlined />} size="small" type="text" />
      </Tooltip>
    </Space.Compact>
  );

  const rangeOnChange: DatePickerProps<Dayjs[]>['onChange'] = (
    date,
    dateString,
  ) => {
    console.log(date, dateString);
    const start = date[0];
    const end = date[1];
    run({ start, end });
  };

  // const rangePickerRender = (

  // )

  const extraFilter = (
    <>
      {selectColorRender}
      {dailyFilter}
      {/* <Divider type="vertical" /> */}
      <RangePicker
        size="small"
        onChange={rangeOnChange}
        variant="borderless"
        className={styles.filterBox}
        separator="~"
      />
      {toolbarRender}
    </>
  );
  const extraGen = () => {
    return <Space size="small">{extraFilter}</Space>;
  };

  return (
    <ProCard title="QPS" extra={extraGen()} bordered>
      <div ref={container}></div>
    </ProCard>
  );
};

export default G2LineDemo;
