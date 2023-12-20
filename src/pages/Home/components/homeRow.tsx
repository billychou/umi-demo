import { useMemo, useContext } from 'react';
import dayjs, { type Dayjs } from 'dayjs';
import { getHomeData } from '@/services/home';
import { Card, Row, Col, List } from 'antd';
import { useRequest, useModel } from '@umijs/max';
import { MyContext } from '../MyContext';


const HomeRow: React.FC = () => {
    const { initialState } = useModel('@@initialState');
    const { currentUser } = initialState;
    const { color } = useContext(MyContext);

    /**
     * 获取当月日期
     */
    const getDayDates = (day: Dayjs) => {
        const monthDays = day.daysInMonth();
        return Array.from({ length: monthDays }, (_, index) => {
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
        return [...lastMonthDays, ...curDays, ...nextMonthDays];
    }, []);

    /**
     * 获取首页数据
     */
    const { data, error, loading } = useRequest(() => {
        return getHomeData({});
    });

    if (loading) {
        return (<div>loading....</div>)
    }

    if (error) {
        return (<div>{error.message}</div>)
    }

    return (
        <Card>
            <Row gutter={8}>
                <Col span={12}>
                    <Card>
                        <div>
                            <h1>欢迎您, {currentUser.nickname}</h1>
                            <p>{color}</p>
                            <p>{latestDate.join(",")}</p>
                        </div>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <List
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
        </Card>
    );
}


export default HomeRow;