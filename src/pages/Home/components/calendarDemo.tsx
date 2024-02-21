import { getCalendarData } from '@/services/home';
import { ProCard } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar } from 'antd';
import type { Dayjs } from 'dayjs';
import React from 'react';

const CalendarDemo: React.FC = () => {
  const { data, error, loading } = useRequest(
    () => {
      return getCalendarData();
    },
    {
      pollingInterval: 6 * 60 * 60 * 1000,
      pollingWhenHidden: false,
      onSuccess: (result, params) => {
        console.log(params);
        console.log(result);
      },
    },
  );

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  console.log('render');

  const getListData = (value: Dayjs) => {
    const curDate = value.format('YYYY-MM-DD');
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
        {listData.map((item: any) => (
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

  const onSelect = (date: Dayjs) => {
    console.log('onSelect');
    console.log(date);
  };

  const onChange = (date: Dayjs) => {
    console.log('onChange');
    console.log(date);
  };

  const onPanelChange = (date: Dayjs, type: string) => {
    console.log('onPanelChange');
    console.log(date, type);
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log('hello');
  //     location.reload();
  //   }, 1000 * 60);
  // }, []);

  return (
    <ProCard>
      <Calendar
        cellRender={cellRender}
        onSelect={onSelect}
        onChange={onChange}
        onPanelChange={onPanelChange}
      />
    </ProCard>
  );
};

export default CalendarDemo;
