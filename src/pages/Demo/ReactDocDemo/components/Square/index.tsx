import { createStyles } from 'antd-style';
import React from 'react';

type SquareProps = {
  value: string;
  onSquareClick: () => void;
};

const useStyles = createStyles(({ token, css }) => ({
  square: {
    background: token['blue-3'],
    border: '1px solid #999',
    float: 'left',
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '34px',
    height: '34px',
    marginRight: '-1px',
    marginTop: '-1px',
    padding: 0,
    textAlign: 'center',
    width: '34px',
  },
  card: css`
    color: ${token.colorTextTertiary};
    box-shadow: ${token.boxShadow};
    &:hover {
      color: ${token.colorTextSecondary};
      box-shadow: ${token.boxShadowSecondary};
    }

    padding: ${token.padding}px;
    border-radius: ${token.borderRadius}px;
    background: ${token.colorBgContainer};
    transition: all 100ms ${token.motionEaseInBack};

    margin-bottom: 8px;
    cursor: pointer;
  `,
}));

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  const { styles, cx, theme } = useStyles();
  return (
    <button
      type="button"
      className={cx('a-simple-create-style-demo-classname', styles.square)}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
