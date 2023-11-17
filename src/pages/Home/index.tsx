import { PageContainer } from '@ant-design/pro-components';
import { useMemo } from 'react';
import { useLocation, useMatch, useModel, useParams, useSearchParams} from '@umijs/max';
import styles from './index.less';
import { Card, List, Divider, Table, Row, Col } from 'antd';
import dayjs, {type Dayjs} from 'dayjs';
import { useRequest } from '@umijs/max';
import { getHomeData } from '@/services/home';


/**
 * HomePage Component 
 */
const HomePage: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState;

  /**
   * Generates an array of formatted dates for each day of the month.
   *
   * @param {Dayjs} day - The starting day.
   * @return {string[]} - An array of formatted dates.
   */
  const getDayDates = (day: Dayjs) => {
    const monthDays = day.daysInMonth();
    return Array.from({length: monthDays}, (_, index) => {
      return dayjs(day).add(index, 'day').format('YYYY-MM-DD');
    });
  }

  /**
   * 获取最新日期
   */
  const latestDate = useMemo(() => {
    const today = dayjs();
    const lastMonth = today.subtract(1, 'month');
    const nextMonth = today.add(1, 'month');
    const curDays = getDayDates(today);
    const lastMonthDays = getDayDates(lastMonth);
    const nextMonthDays = getDayDates(nextMonth);
    console.log("latestDate");
    return [...lastMonthDays,...curDays, ...nextMonthDays];
  }, []);

  const {data, error, loading } = useRequest(() => {
    return getHomeData({});
  });

  if (loading) {
    return (<div>loading....</div>)
  }

  if (error) {
    return (<div>{error.message}</div>)
  }

  return (
    <PageContainer ghost>
        <Row>
          <Col span={8}>
            <Card>
              <div>
                <h1>Hello, {currentUser.username}</h1>
                <p>Welcome to your dashboard.</p>
                <p>{latestDate.join(",")}</p>
              </div>
            </Card>
          </Col>
          <Col span={16}>
            <Card>
              <List
                header={<div>常识列表</div>}
                footer={(<div></div>)}
                dataSource={data}
                renderItem={
                  (item) => (
                    <List.Item>
                      <List.Item.Meta
                        title={item.title}
                        description={item.description}
                      />
                    </List.Item>
                  )
                }
              >
              </List> 
            </Card>
          </Col>
        </Row>
    </PageContainer>
  );
};

export default HomePage;
