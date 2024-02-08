import React, {useState} from 'react';
import { Button, Flex, Radio, Segmented, Space} from 'antd';
import type {FlexProps, SegmentedProps} from 'antd';
import { blue, green, yellow, red } from '@ant-design/colors';
import { createStyles } from 'antd-style';

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

const justifyOptions = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'];
const alignOptions = ['flex-start', 'center', 'flex-end'];
const flexOptions = [{label:"水平", value: "horizontal"}, {label: "垂直", value: "vertical"}]



const LayoutDemo: React.FC<LayoutDemoProps> = () => {
    const [value, setValue] = useState<string>(flexOptions[0].value);
    const [justify, setJustify] = useState<FlexProps['justify']>(justifyOptions[0]);
    const [alignItems, setAlignItems] = useState<FlexProps['align']>(alignOptions[0]);
    return (
        <Flex gap="middle" vertical>
            {/* <Radio.Group
                value={value}
                onChange={(e) => setValue(e.target.value)}
            >
                <Radio.Button value="horizontal">水平</Radio.Button>
                <Radio.Button value="vertical">垂直</Radio.Button>
            </Radio.Group> */}
            <Segmented 
                options={flexOptions}
                onChange={(value) => setValue(value)}
                block
            />
            
            <Flex vertical={value === 'vertical'}>
                {Array.from({length: 20}).map((_, i) => (
                   <div key={i} style={{...baseStyle, backgroundColor: i % 2 ? blue[4] : green[4]}}></div> 
                ))}
            </Flex>
            <Flex vertical={false}>
                {Array.from({length: 11}).map((_, index)=>{
                    return (
                        <div key={index} style={{...baseStyle, backgroundColor: index % 2 ? yellow[4] : red[4]}}></div>
                    );
                })}
            </Flex>
            <Flex gap="middle" align="start" vertical>
                <p>Select justify: </p>
                <Segmented
                    options={justifyOptions}
                    onChange={(value) => setJustify(value)}
                />
                <p>
                    Select align: 
                </p>
                <Segmented
                    options={alignOptions}
                    onChange={(value) => setAlignItems(value)}
                />
                <Flex
                    style={boxStyle}
                    justify={justify}
                    align={alignItems}
                >
                    <Button type="primary">primary</Button>
                    <Button type="primary">primary</Button>
                    <Button type="primary">primary</Button>
                    <Button type="primary">primary</Button>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default LayoutDemo;

