import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { createStyles } from 'antd-style';
import classNames from 'classnames';
import React from 'react';

const useStyles = createStyles(({ token, css }) => {
  const styles = {
    suffix: {
      marginLeft: '4px',
      color: token.colorText,
      fontSize: '16px',
      fontStyle: 'normal',
    },
    numberInfoTitle: {
      marginBottom: '16px',
      color: token.colorText,
      fontSize: token['font-size-lg'],
      transition: 'all 0.3s',
    },
    numberInfoSubTitle: {
      height: '22px',
      overflow: 'hidden',
      color: token.colorTextSecondary,
      fontSize: token.fontSize,
      lineHeight: '22px',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      wordBreak: 'break-all',
    },
    numberInfoValue: {
      marginTop: '4px',
      overflow: 'hidden',
      fontSize: '0',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      wordBreak: 'break-all',
      '& > span': { color: token.colorText },
    },
    subTotal: {
      marginRight: '0',
      color: token.colorTextSecondary,
      fontSize: token['font-size-lg'],
      verticalAlign: 'top',
    },
    anticon: {
      marginLeft: '4px',
      fontSize: '12px',
      transform: 'scale(0.82)',
    },
    'anticon-caret-up': {
      color: token['red-6'],
    },
    'anticon-caret-down': {
      color: token['green-6'],
    },
  };
  return styles;
});

export type NumberInfoProps = {
  title?: React.ReactNode | string;
  subTitle?: React.ReactNode | string;
  total?: React.ReactNode | string;
  status?: 'up' | 'down';
  theme?: string;
  gap?: number;
  subTotal?: number;
  suffix?: string;
  style?: React.CSSProperties;
};
const NumberInfo: React.FC<NumberInfoProps> = ({
  theme,
  title,
  subTitle,
  total,
  subTotal,
  status,
  suffix,
  gap,
  ...rest
}) => {
  const { styles } = useStyles();
  return (
    <div
      className={classNames(styles.numberInfo, {
        [styles[`numberInfo${theme}`]]: theme,
      })}
      {...rest}
    >
      {title && (
        <div
          className={styles.numberInfoTitle}
          title={typeof title === 'string' ? title : ''}
        >
          {title}
        </div>
      )}
      {subTitle && (
        <div
          className={styles.numberInfoSubTitle}
          title={typeof subTitle === 'string' ? subTitle : ''}
        >
          {subTitle}
        </div>
      )}
      <div
        className={styles.numberInfoValue}
        style={
          gap
            ? {
                marginTop: gap,
              }
            : {}
        }
      >
        <span>
          {total}
          {suffix && <em className={styles.suffix}>{suffix}</em>}
        </span>
        {(status || subTotal) && (
          <span className={styles.subTotal}>
            {subTotal}
            {status && status === 'up' ? (
              <CaretUpOutlined />
            ) : (
              <CaretDownOutlined />
            )}
          </span>
        )}
      </div>
    </div>
  );
};
export default NumberInfo;
