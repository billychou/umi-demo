import { GridContent } from '@ant-design/pro-components';
import { Col, Divider, Row } from 'antd';
import React from 'react';

import { createStyles } from 'antd-style';

const useStyle = createStyles(({ token }) => ({
  row: { margin: '20px 0' },
  col: {
    backgroundColor: token.blue3,
    padding: '8px 0',
  },
  box: {
    background: token.yellow1,
    padding: '8px 0',
    textAlign: 'center',
  },
}));

type Props = {};

export default function index({}: Props) {
  const { styles } = useStyle();
  return (
    <GridContent>
      {/* <Divider orientation="left">Horizontal</Divider> */}
      <Divider orientation="center">Horizontal</Divider>
      {/* <Divider orientation="right">Horizontal</Divider> */}
      <Row gutter={24} className={styles.row}>
        <Col span={6} className={styles.col}>
          <div className={styles.box}>Left</div>
        </Col>
        <Col span={6} className={styles.col}>
          <div className={styles.box}>Right</div>
        </Col>
        <Col span={6} className={styles.col}>
          <div className={styles.box}>Right</div>
        </Col>
        <Col span={6} className={styles.col}>
          <div className={styles.box}>Right</div>
        </Col>
      </Row>
      <Row gutter={24} className={styles.row}>
        <Col span={8} className={styles.col}>
          <div className={styles.box}>Left</div>
        </Col>
        <Col span={8} offset={8} className={styles.col}>
          <div className={styles.box}>Right</div>
        </Col>
      </Row>
    </GridContent>
  );
}
