/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card } from 'antd';
import { createStyles } from 'antd-style';
import type { CardProps } from 'antd/es/card';
import classNames from 'classnames';
import React from 'react';
type totalType = () => React.ReactNode;

const useStyles = createStyles(({ token }) => ({
  chartCard: {
    position: 'relative',
  },
  chartTop: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  chartTopMargin: {
    marginBottom: '12px',
  },
  chartTopHasMargin: {
    marginBottom: '20px',
  },
  metaWrap: {
    float: 'left',
  },
  avatar: {
    position: 'relative',
    top: '4px',
    float: 'left',
    marginRight: '20px',
    img: { borderRadius: '100%' },
  },
  meta: {
    height: '22px',
    color: token.colorTextSecondary,
    fontSize: token.fontSize,
    lineHeight: '22px',
  },
  action: {
    position: 'absolute',
    top: '4px',
    right: '0',
    lineHeight: '1',
    cursor: 'pointer',
  },
  total: {
    height: '38px',
    marginTop: '4px',
    marginBottom: '0',
    overflow: 'hidden',
    color: token.colorTextHeading,
    fontSize: '30px',
    lineHeight: '38px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    wordBreak: 'break-all',
  },
  content: {
    position: 'relative',
    width: '100%',
    marginBottom: '12px',
  },
  contentFixed: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
  },
  footer: {
    marginTop: '8px',
    paddingTop: '9px',
    borderTop: `1px solid ${token.colorSplit}`,
    '& > *': { position: 'relative' },
  },
  footerMargin: {
    marginTop: '20px',
  },
}));

export type ChartCardProps = {
  title: React.ReactNode;
  action?: React.ReactNode;
  total?: React.ReactNode | number | (() => React.ReactNode | number);
  footer?: React.ReactNode;
  contentHeight?: number;
  avatar?: React.ReactNode;
  style?: React.CSSProperties;
} & CardProps;

const ChartCard: React.FC<ChartCardProps> = (props) => {
  const { styles } = useStyles();
  const renderTotal = (total?: number | totalType | React.ReactNode) => {
    if (!total && total !== 0) {
      return null;
    }
    let totalDom;
    switch (typeof total) {
      case 'undefined':
        totalDom = null;
        break;
      case 'function':
        totalDom = <div className={styles.total}>{total()}</div>;
        break;
      default:
        totalDom = <div className={styles.total}>{total}</div>;
    }
    return totalDom;
  };
  const renderContent = () => {
    const {
      contentHeight,
      title,
      avatar,
      action,
      total,
      footer,
      children,
      loading,
    } = props;
    if (loading) {
      return false;
    }
    return (
      <div className={styles.chartCard}>
        <div
          className={classNames(styles.chartTop, {
            [styles.chartTopMargin]: !children && !footer,
          })}
        >
          <div className={styles.avatar}>{avatar}</div>
          <div className={styles.metaWrap}>
            <div className={styles.meta}>
              <span>{title}</span>
              <span className={styles.action}>{action}</span>
            </div>
            {renderTotal(total)}
          </div>
        </div>
        {children && (
          <div
            className={styles.content}
            style={{
              height: contentHeight || 'auto',
            }}
          >
            <div className={contentHeight && styles.contentFixed}>
              {children}
            </div>
          </div>
        )}
        {footer && (
          <div
            className={classNames(styles.footer, {
              [styles.footerMargin]: !children,
            })}
          >
            {footer}
          </div>
        )}
      </div>
    );
  };

  const {
    loading = false,
    contentHeight,
    title,
    avatar,
    action,
    total,
    footer,
    children,
    ...rest
  } = props;
  return (
    <Card
      loading={loading}
      bodyStyle={{
        padding: '20px 24px 8px 24px',
      }}
      {...rest}
    >
      {renderContent()}
    </Card>
  );
};
export default ChartCard;
