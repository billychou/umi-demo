import dayjs from 'dayjs';

const now = dayjs();
const today = now.format('YYYY-MM-DDTHH:mm:00');
const lastMin = now.subtract(1, 'minute').format('YYYY-MM-DDTHH:mm:00');
const lastTwoMin = now.subtract(2, 'minute').format('YYYY-MM-DDTHH:mm:00');

const getLatestMonth = () => {
  let now = dayjs();
  return now.subtract(1, 'month').format('YYYY-MM-DDTHH:mm:00');
};

export { today, lastMin, lastTwoMin };
