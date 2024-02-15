import { blue, green, red, yellow } from '@ant-design/colors';
import { UploadOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  ConfigProviderProps,
  Divider,
  Flex,
  Popconfirm,
  Radio,
  Segmented,
  SegmentedProps,
  Slider,
  Space,
  Typography,
  Upload,
} from 'antd';
import React, { useState } from 'react';

type SizeType = ConfigProviderProps['componentSize'];

type LayoutDemoProps = {
  name?: string;
};

const baseStyle: React.CSSProperties = {
  width: '10%',
  height: 54,
};

const boxStyle: React.CSSProperties = {
  width: '100%',
  height: 120,
  borderRadius: 6,
  border: '1px solid #4019ff',
};

const cardStyle: React.CSSProperties = {
  width: 620,
};

const imgStyle: React.CSSProperties = {
  display: 'block',
  width: 273,
};

const justifyOptions = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
];
const alignOptions = ['flex-start', 'center', 'flex-end'];
const flexOptions: SegmentedProps['options'] = [
  { label: '水平', value: 'horizontal' },
  { label: '垂直', value: 'vertical' },
];

const LayoutDemo: React.FC<LayoutDemoProps> = () => {
  const [value, setValue] = useState<SegmentedProps['value']>('horizontal');
  const [justify, setJustify] = useState<SegmentedProps['value']>(
    justifyOptions[0],
  );
  const [alignItems, setAlignItems] = useState<SegmentedProps['value']>(
    alignOptions[0],
  );
  const [gapSize, setGapSize] = useState<SizeType | 'customize'>('small');
  const [customGapSize, setCustomGapSize] = useState<number>(0);
  const [spaceSize, setSpaceSize] = useState<SizeType>('small');
  return (
    <Flex gap="middle" vertical>
      <Segmented
        options={flexOptions}
        onChange={(value) => setValue(value)}
        block
      />

      <Flex vertical={value === 'vertical'}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            style={{
              ...baseStyle,
              backgroundColor: i % 2 ? blue[4] : green[4],
            }}
          ></div>
        ))}
      </Flex>
      <Flex vertical={false}>
        {Array.from({ length: 11 }).map((_, index) => {
          return (
            <div
              key={index}
              style={{
                ...baseStyle,
                backgroundColor: index % 2 ? yellow[4] : red[4],
              }}
            ></div>
          );
        })}
      </Flex>
      <Divider />
      <Flex gap="middle" align="start" vertical>
        <p>Select justify: </p>
        <Segmented
          options={justifyOptions}
          onChange={(value) => setJustify(value)}
        />
        <p>Select align:</p>
        <Segmented
          options={alignOptions}
          onChange={(value) => setAlignItems(value)}
        />
        <Flex style={boxStyle} justify={justify} align={alignItems}>
          <Button type="primary">primary</Button>
          <Button type="primary">primary</Button>
          <Button type="primary">primary</Button>
          <Button type="primary">primary</Button>
        </Flex>
        <Divider />
      </Flex>
      <Radio.Group value={gapSize} onChange={(e) => setGapSize(e.target.value)}>
        {['small', 'middle', 'large', 'customize'].map((size) => (
          <Radio value={size} key={size}>
            {size}
          </Radio>
        ))}
      </Radio.Group>
      {gapSize === 'customize' && (
        <Slider value={customGapSize} onChange={setCustomGapSize}></Slider>
      )}
      <Flex gap={gapSize === 'customize' ? customGapSize : gapSize}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Flex>

      <Divider />
      <Flex wrap="wrap" gap="small">
        {Array.from({ length: 20 }, (_, index) => {
          return (
            <Button key={index} type="primary">
              Button
            </Button>
          );
        })}
      </Flex>

      <Divider />
      <Card
        hoverable
        style={cardStyle}
        styles={{ body: { padding: 0, overflow: 'hidden' } }}
      >
        <Flex justify="space-between">
          <img
            alt="avatar"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            style={imgStyle}
          />
          <Flex
            vertical
            align="flex-end"
            justify="space-between"
            style={{ padding: 32 }}
          >
            <Typography.Title level={3}>
              “antd is an enterprise-class UI design language and React UI
              library.”
            </Typography.Title>
            <Button type="primary" href="https://ant.design" target="_blank">
              Get Started
            </Button>
          </Flex>
        </Flex>
      </Card>

      <Space>
        Space
        <Button type="primary">Button</Button>
        <Upload>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <Popconfirm
          title="Are you sure delete this task?"
          okText="Yes"
          cancelText="No"
        >
          <Button>Confirm</Button>
        </Popconfirm>
      </Space>

      <Radio.Group
        value={spaceSize}
        onChange={(e) => setSpaceSize(e.target.value)}
      >
        {['small', 'middle', 'large', 'customize'].map((item) => (
          <Radio key={item} value={item}>
            {item}
          </Radio>
        ))}
        <Radio key="custom" value="custom">
          自定义
        </Radio>
      </Radio.Group>
      <Space direction="vertical" size={spaceSize} style={{ display: 'flex' }}>
        <Card title="card" size="small">
          <p>Card Content</p>
          <p>Card Content 2</p>
        </Card>
        <Card title="card" size="small">
          <p>Card Content</p>
          <p>Card Content 2</p>
        </Card>
        <Card title="card" size="small">
          <p>Card Content</p>
          <p>Card Content 2</p>
        </Card>
      </Space>
    </Flex>
  );
};

export default LayoutDemo;
