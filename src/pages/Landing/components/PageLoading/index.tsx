import { Spin } from 'antd';
import { createStyles } from 'antd-style';
import React from 'react';

const useStyles = createStyles(() => {
  return {
    pinStyle: {
      paddingTop: 100,
      textAlign: 'center',
    },
  };
});

// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
export default () => {
  const { styles } = useStyles();
  return (
    <div className={styles.pinStyle}>
      <Spin size="large" />
    </div>
  );
};
