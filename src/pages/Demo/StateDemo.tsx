import React, { useState } from "react";
import { sculptureList } from "./data";
import { Button, Card, Row, Col, Input, Space, Divider } from "antd";
import styles from './index.less';

interface StateDemoProps {
    propsName?: any;
}

const StateDemo: React.FC<StateDemoProps> = () => {
    // sculpture list index
    const [index, setIndex] = useState(0);
    const [index2, setIndex2] = useState(0);

    const onClick = () => {
        setIndex(index + 1);
        setIndex(index + 1);
    }

    const onClick2 = () => {
        setIndex2(prev => prev+1);
        setIndex2(prev => prev+1);
    }

    return (
        <Space direction="vertical">
            <Card>
                <Button onClick={onClick} type="primary" size="small">单值</Button>
                <Divider type="vertical" />
                <Button onClick={onClick2} type="primary" size="small">函数</Button>
                <Divider type="vertical" />
                {index}
                <Divider type="vertical" />
                {index2}
            </Card>
        </Space>
    );
};

export default StateDemo;
