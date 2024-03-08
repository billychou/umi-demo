import { createStyles } from 'antd-style';
import dayjs from 'dayjs';
import React from 'react';

import { lastMin, lastTwoMin, today } from './utils';

const useStyles = createStyles(({ token, css }) => ({
  container: {
    width: '100%',
    height: '100%',
  },
  box1: {
    width: '500px',
    height: '200px',
    backgroundColor: token.colorBgContainer,
  },
}));

/**
 * 计算市场建厂
 * @param startDateString
 * @param endDateString
 */
// export const getDateDiff = (startDateString, endDateString) => {
//   const startDate = dayjs(startDateString, 'YYYY-MM-DD');
//   const endDate = dayjs(endDateString, 'YYYY-MM-DD');
//   const diff = endDate.diff(startDate);
//   const duration = endDate.duration(diff);
//   const years = duration.years();
//   const months = duration.months();
//   const days = duration.days();
//   console.log(diff);
// };

const now = dayjs();
const startDate = dayjs('2023-01-01T00:00:00', 'YYYY-MM-DDTHH:mm:ss');
console.log(startDate.format('YYYY-MM-DD HH:mm'));
const endDate = dayjs('2021-01-01T01:00:00', 'YYYY-MM-DDTHH:mm:ss');
// const minutes = endDate.diff(startDate, 'minutes');
// console.log(minutes);

const result = [];
for (let i = 1; i < 11; i++) {
  let tmpDate = startDate.add(i, 'minute');
  let tDate = tmpDate.format('YYYY-MM-DDTHH:mm:00');
  result.push(tDate);
}
console.log(result);

const DayjsDemo: React.FC = () => {
  const { styles } = useStyles();
  // message.info('Dayjs Demo');
  // const now = dayjs();
  // const day = now.format('YYYY-MM-DDTHH:MM:00');
  // console.log(day);
  // const lastMin = now.subtract(1, 'minutes').format('YYYY-MM-DDTHH:MM:00');
  // console.log(lastMin);

  // console.log(dayjs.duration().minutes());
  return (
    <div>
      <div className={styles.box1}>
        <ul>
          <li>{today}</li>
          <li>{lastMin}</li>
          <li>{lastTwoMin}</li>
        </ul>
      </div>
    </div>
  );
};

export default DayjsDemo;
