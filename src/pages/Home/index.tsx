import { PageContainer } from '@ant-design/pro-components';
import { useLocation, useMatch, useModel, useParams, useSearchParams } from '@umijs/max';
import styles from './index.less';
import { Card, message } from 'antd';
import dayjs, {type Dayjs} from 'dayjs';

/**
 * HomePage Component 
 */
const HomePage: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState;
  const res = dayjs().date();
   /**
   * Generates an array of formatted dates for each day of the month.
   *
   * @param {Dayjs} day - The starting day.
   * @return {string[]} - An array of formatted dates.
   */
  const getDayDates = (day: Dayjs) => {
    const  monthDays = day.daysInMonth();
    return Array.from({length: monthDays}, (_, index) => {
      return dayjs(day).add(index, 'day').format('YYYY-MM-DD');
    });
  }
  /**
   * 获取最新日期
   */
  const getLatestDate = () => {
    const today = dayjs();
    const lastMonth = today.subtract(1, 'month');
    const nextMonth = today.add(1, 'month');
    const curDays = getDayDates(today);
    const lastMonthDays = getDayDates(lastMonth);
    const nextMonthDays = getDayDates(nextMonth);
    return [...lastMonthDays,...curDays, ...nextMonthDays];
  }

  console.log(getLatestDate());
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Card>
            当前用户:{currentUser.username} 
            <div>{res}</div>

        </Card>
      </div>
    </PageContainer>
  );
};

export default HomePage;
