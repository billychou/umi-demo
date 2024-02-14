import { getCalendarData } from '@/services/home';
import { ProCard } from '@ant-design/pro-components';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar } from 'antd';
import type { Dayjs } from 'dayjs';

const { data } = await getCalendarData();
console.log(data);

const getListData = (value: Dayjs) => {
  // listData = await getCalendarData({cur_date: value.format("%Y-%m-%d")});
  const curDate = value.format('YYYY-MM-DD');
  console.log(curDate);
  let listData = data[curDate];
  return listData;
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const dateCellRender = (value: Dayjs) => {
  const listData = getListData(value) ?? [];
  return (
    <ul className="events">
      {listData.map((item) => (
        <li key={item.content}>
          <Badge
            status={item.type as BadgeProps['status']}
            text={item.content}
          />
        </li>
      ))}
    </ul>
  );
};

const CalendarDemo: React.FC = () => {
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  return (
    <ProCard>
      <Calendar cellRender={cellRender} />
    </ProCard>
  );
};

export default CalendarDemo;
