import { dataTypeOptions } from '@/services/alert/constant';
import { useModel } from '@umijs/max';
import { createStyles } from 'antd-style';
import React, { useMemo } from 'react';

const useStyles = createStyles(({ token, css }) => {
  return {
    left: {
      width: '32px',
      position: 'absolute',
      borderRight: '1px solid #f0f0f0',
    },
    selectedItem: {
      width: '32px',
      borderRight: '1px solid #f0f0f0',
      position: 'relative',
      padding: '8px 0',
      textAlign: 'center',
      borderBottom: '1px solid #f0f0f0',
      cursor: 'pointer',
      color: '#197dff',
      fontWeight: 600,
      background: '#e6f5ff',
    },
    item: {
      width: '32px',
      borderRight: '1px solid #f0f0f0',
      position: 'relative',
      padding: '8px 0',
      color: '#606366',
      textAlign: 'center',
      borderBottom: '1px solid #f0f0f0',
      cursor: 'pointer',
    },
    circle: {
      width: '32px',
      position: 'absolute',
      borderRight: '1px solid #f0f0f0',
      bottom: '4px',
      left: '13px',
      lineHeight: '4px',
    },
  };
});

interface LeftToolbarType {
  dataType: number;
  setDataType: (arg: number) => void;
  invalid?: boolean;
  limit?: (API.comDataType & { children: string[] })[];
}

const LeftToolbar: React.FC<LeftToolbarType> = ({
  dataType,
  setDataType,
  invalid = false,
  limit,
}) => {
  const { initialState } = useModel('@@initialState');
  const { styles } = useStyles();

  const data = useMemo(() => {
    if (invalid) {
      return dataTypeOptions.slice(-1);
    } else {
      return limit;
    }
  }, [invalid, limit]);

  return (
    <div style={{ width: 32 }}>
      <div
        style={{
          height: `calc(100vh - ${initialState?.fullScreen ? 48 : 98}px)`,
        }}
        className={styles.left}
      >
        {data?.map((n) => (
          <div
            key={n.value}
            onClick={() => setDataType(n.value as number)}
            className={n.value === dataType ? styles.selectedItem : styles.item}
          >
            {n.label.split('').map((w, i) => (
              <div key={i}>{w}</div>
            ))}
            <div className={styles.circle} hidden={n.value !== dataType}>
              <div
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: 4,
                  background: '#197DFF',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftToolbar;
