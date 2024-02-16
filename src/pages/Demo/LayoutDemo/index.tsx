import { blue, green, red, yellow } from '@ant-design/colors';
import { CopyOutlined, UploadOutlined } from '@ant-design/icons';
import {
  AutoComplete,
  Button,
  Card,
  Cascader,
  ConfigProviderProps,
  DatePicker,
  Divider,
  Flex,
  Input,
  InputNumber,
  Popconfirm,
  Radio,
  Segmented,
  SegmentedProps,
  Select,
  Slider,
  Space,
  TimePicker,
  Tooltip,
  TreeSelect,
  Typography,
  Upload,
} from 'antd';

const { Option } = Select;
const { TreeNode } = TreeSelect;

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
      <Space split={<Divider type="vertical" />}>
        <Typography.Link>Link</Typography.Link>
        <Typography.Link>Link</Typography.Link>
        <Typography.Link>Link</Typography.Link>
      </Space>
      <Space direction="vertical">
        <Space.Compact block>
          <Input style={{ width: '20%' }} defaultValue="0571" />
          <Input style={{ width: '30%' }} defaultValue="26888888" />
        </Space.Compact>
        <Space.Compact block size="small">
          <Input
            style={{ width: 'calc(100% - 200px)' }}
            defaultValue="https://ant.design"
          />
          <Button type="primary">Submit</Button>
        </Space.Compact>
        <Space.Compact block>
          <Input
            style={{ width: 'calc(100% - 200px)' }}
            defaultValue="https://ant.design"
          />
          <Button type="primary">Submit</Button>
        </Space.Compact>
        <Space.Compact block>
          <Input
            style={{ width: 'calc(100% - 200px)' }}
            defaultValue="git@github.com:ant-design/ant-design.git"
          />
          <Tooltip title="copy git url">
            <Button icon={<CopyOutlined />} />
          </Tooltip>
        </Space.Compact>
        <Space.Compact block>
          <Select defaultValue="Zhejiang" allowClear>
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
          <Input
            style={{ width: '50%' }}
            defaultValue="Xihu District, Hangzhou"
          />
        </Space.Compact>
        <Space.Compact block>
          <Select
            allowClear
            mode="multiple"
            defaultValue="Zhejianggggg"
            style={{ width: '50%' }}
          >
            <Option value="Zhejianggggg">Zhejianggggg</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
          <Input
            style={{ width: '50%' }}
            defaultValue="Xihu District, Hangzhou"
          />
        </Space.Compact>
        <Space.Compact block>
          <Input.Search style={{ width: '30%' }} defaultValue="0571" />
          <Input.Search
            allowClear
            style={{ width: '50%' }}
            defaultValue="26888888"
          />
          <Input.Search style={{ width: '20%' }} defaultValue="+1" />
        </Space.Compact>
        <Space.Compact block>
          <Select defaultValue="Option1">
            <Option value="Option1">Option1</Option>
            <Option value="Option2">Option2</Option>
          </Select>
          <Input style={{ width: '50%' }} defaultValue="input content" />
          <InputNumber defaultValue={12} />
        </Space.Compact>
        <Space.Compact block>
          <Input style={{ width: '50%' }} defaultValue="input content" />
          <DatePicker style={{ width: '50%' }} />
        </Space.Compact>
        <Space.Compact block>
          <DatePicker.RangePicker style={{ width: '70%' }} />
          <Input style={{ width: '30%' }} defaultValue="input content" />
          <Button type="primary">查询</Button>
        </Space.Compact>
        <Space.Compact block>
          <Input style={{ width: '30%' }} defaultValue="input content" />
          <DatePicker.RangePicker style={{ width: '70%' }} />
        </Space.Compact>
        <Space.Compact block>
          <Select defaultValue="Option1-1">
            <Option value="Option1-1">Option1-1</Option>
            <Option value="Option1-2">Option1-2</Option>
          </Select>
          <Select defaultValue="Option2-2">
            <Option value="Option2-1">Option2-1</Option>
            <Option value="Option2-2">Option2-2</Option>
          </Select>
        </Space.Compact>
        <Space.Compact block>
          <Select defaultValue="1">
            <Option value="1">Between</Option>
            <Option value="2">Except</Option>
          </Select>
          <Input
            style={{ width: 100, textAlign: 'center' }}
            placeholder="Minimum"
          />
          <Input
            className="site-input-split"
            style={{
              width: 30,
              borderLeft: 0,
              borderRight: 0,
              pointerEvents: 'none',
            }}
            placeholder="~"
            disabled
          />
          <Input
            className="site-input-right"
            style={{
              width: 100,
              textAlign: 'center',
            }}
            placeholder="Maximum"
          />
        </Space.Compact>
        <Space.Compact block>
          <Select defaultValue="Sign Up" style={{ width: '30%' }}>
            <Option value="Sign Up">Sign Up</Option>
            <Option value="Sign In">Sign In</Option>
          </Select>
          <AutoComplete
            style={{ width: '70%' }}
            placeholder="Email"
            options={[{ value: 'text 1' }, { value: 'text 2' }]}
          />
        </Space.Compact>
        <Space.Compact block>
          <TimePicker style={{ width: '70%' }} />
          <Cascader
            style={{ width: '70%' }}
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                      {
                        value: 'xihu',
                        label: 'West Lake',
                      },
                    ],
                  },
                ],
              },
              {
                value: 'jiangsu',
                label: 'Jiangsu',
                children: [
                  {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                      {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                      },
                    ],
                  },
                ],
              },
            ]}
            placeholder="Select Address"
          />
        </Space.Compact>
        <Space.Compact block>
          <TimePicker.RangePicker />
          <TreeSelect
            showSearch
            style={{ width: '60%' }}
            value="leaf1"
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Please select"
            allowClear
            treeDefaultExpandAll
            onChange={() => {}}
          >
            <TreeNode value="parent 1" title="parent 1">
              <TreeNode value="parent 1-0" title="parent 1-0">
                <TreeNode value="leaf1" title="leaf1" />
                <TreeNode value="leaf2" title="leaf2" />
              </TreeNode>
              <TreeNode value="parent 1-1" title="parent 1-1">
                <TreeNode
                  value="leaf3"
                  title={<b style={{ color: '#08c' }}>leaf3</b>}
                />
              </TreeNode>
            </TreeNode>
          </TreeSelect>
          <Button type="primary">Submit</Button>
        </Space.Compact>
        <Space.Compact>
          <Input placeholder="input here" />
          <InputNumber placeholder="another input" addonBefore="$" />
          <InputNumber placeholder="another input" addonAfter="$" />
        </Space.Compact>
      </Space>
    </Flex>
  );
};

export default LayoutDemo;
