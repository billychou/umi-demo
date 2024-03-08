import {
  CommentOutlined,
  DownloadOutlined,
  EllipsisOutlined,
  HeartOutlined,
  LikeOutlined,
  MailOutlined,
  MobileOutlined,
  ShareAltOutlined,
  StarOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { Line } from '@ant-design/plots';
import { ProCard } from '@ant-design/pro-components';
import { Button, Dropdown, Menu, Segmented, Space, Tooltip } from 'antd';
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

const ExtraFilter = (
  <Segmented
    options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']}
    onChange={(value) => {
      console.log(value); // string
    }}
  />
);

const ExtraFilter1 = (
  <Space.Compact block>
    <Tooltip title="Like">
      <Button icon={<LikeOutlined />} />
    </Tooltip>
    <Tooltip title="Comment">
      <Button icon={<CommentOutlined />} />
    </Tooltip>
    <Tooltip title="Star">
      <Button icon={<StarOutlined />} />
    </Tooltip>
    <Tooltip title="Heart">
      <Button icon={<HeartOutlined />} />
    </Tooltip>
    <Tooltip title="Share">
      <Button icon={<ShareAltOutlined />} />
    </Tooltip>
    <Tooltip title="Download">
      <Button icon={<DownloadOutlined />} />
    </Tooltip>
    <Dropdown
      placement="bottomRight"
      overlay={
        <Menu
          items={[
            {
              key: '1',
              label: 'Report',
              icon: <WarningOutlined />,
            },
            {
              key: '2',
              label: 'Mail',
              icon: <MailOutlined />,
            },
            {
              key: '3',
              label: 'Mobile',
              icon: <MobileOutlined />,
            },
          ]}
        />
      }
      trigger={['click']}
    >
      <Button icon={<EllipsisOutlined />} />
    </Dropdown>
  </Space.Compact>
);

const MetricLine: React.FC = () => {
  const { styles } = useStyles();
  return (
    <ProCard title="CBS" extra={ExtraFilter1}>
      {/* <div className={styles.filter1}>filter1</div> */}
      {/* <div>filter2</div> */}
      {/* <Space.Compact block>
        <Button type="primary">Button 1</Button>
        <Button type="primary">Button 2</Button>
        <Button type="primary">Button 3</Button>
        <Button type="primary">Button 4</Button>
        <Tooltip title="Tooltip">
          <Button type="primary" icon={<DownloadOutlined />} disabled />
        </Tooltip>
        <Tooltip title="Tooltip">
          <Button type="primary" icon={<DownloadOutlined />} />
        </Tooltip>
      </Space.Compact> */}
      <Line {...config} />
    </ProCard>
  );
};

export default MetricLine;
