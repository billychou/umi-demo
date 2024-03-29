import CountSvg from '@/assets/icons/count.svg';
import ResponseRateSvg from '@/assets/icons/response_rate.svg';
import RtSvg from '@/assets/icons/rt.svg';
import SuccessRateSvg from '@/assets/icons/success_rate.svg';
import { StatisticCard } from '@ant-design/pro-components';
import { Flex } from 'antd';
import React, { useState } from 'react';

const BusinessCard: React.FC = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <Flex gap="middle">
      <StatisticCard
        statistic={{
          title: '交易量',
          value: 12456,
          icon: (
            <img
              src={CountSvg}
              alt="icon"
              style={{
                width: 32,
                height: 32,
                marginRight: 16,
                display: 'block',
              }}
            />
          ),
        }}
      />
      <StatisticCard
        statistic={{
          title: '成功率',
          value: '30%',
          icon: (
            <img
              src={SuccessRateSvg}
              alt="icon"
              style={{
                width: 32,
                height: 32,
                marginRight: 16,
                display: 'block',
              }}
            />
          ),
        }}
      />
      <StatisticCard
        statistic={{
          title: '响应率',
          value: '30%',
          icon: (
            <img
              src={ResponseRateSvg}
              alt="icon"
              style={{
                width: 32,
                height: 32,
                marginRight: 16,
                display: 'block',
              }}
            />
          ),
        }}
      />
      <StatisticCard
        statistic={{
          title: '响应时间',
          value: '30%',
          icon: (
            <img
              src={RtSvg}
              alt="icon"
              style={{
                width: 32,
                height: 32,
                marginRight: 16,
                display: 'block',
              }}
            />
          ),
        }}
      />
    </Flex>
  );
};

export default BusinessCard;
