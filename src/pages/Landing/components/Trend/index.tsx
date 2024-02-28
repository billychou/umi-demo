import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { createStyles } from 'antd-style';
import classNames from 'classnames';
import React from 'react';

const useStyles = createStyles(({ token }) => {
  return {
    trendItem: {
      display: 'inline-block',
      fontSize: token.fontSize,
      lineHeight: '22px',
    },
    up: {
      color: token['red-6'],
    },
    down: {
      top: '-1px',
      color: token['green-6'],
    },
    trendItemGrey: {
      up: {
        color: token.colorText,
      },
      down: {
        color: token.colorText,
      },
    },
    reverseColor: {
      up: { color: token['green-6'] },
      down: { color: token['red-6'] },
    },
  };
});

export type TrendProps = {
  colorful?: boolean;
  flag: 'up' | 'down';
  style?: React.CSSProperties;
  reverseColor?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const Trend: React.FC<TrendProps> = ({
  colorful = true,
  reverseColor = false,
  flag,
  children,
  className,
  ...rest
}) => {
  const { styles } = useStyles();
  const classString = classNames(
    styles.trendItem,
    {
      [styles.trendItemGrey]: !colorful,
      [styles.reverseColor]: reverseColor && colorful,
    },
    className,
  );
  return (
    <div
      {...rest}
      className={classString}
      title={typeof children === 'string' ? children : ''}
    >
      <span>{children}</span>
      {flag && (
        <span className={styles[flag]}>
          {flag === 'up' ? <CaretUpOutlined /> : <CaretDownOutlined />}
        </span>
      )}
    </div>
  );
};
export default Trend;
