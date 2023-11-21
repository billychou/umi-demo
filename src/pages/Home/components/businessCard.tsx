import { useState } from 'react';
import { StatisticCard } from '@ant-design/pro-components';
import { Card, Divider, Row, Col } from 'antd';
import { ProCard } from '@ant-design/pro-components';
import CountSvg from '@/assets/icons/count.svg';
import SuccessRateSvg from '@/assets/icons/success_rate.svg';
import ResponseRateSvg from '@/assets/icons/response_rate.svg';
import RtSvg from '@/assets/icons/rt.svg';


const BusinessCard: React.FC = () => {
    const [responsive, setResponsive] = useState(false);
    return (
        <Row gutter={8}>
            <Col span={8}>
                <ProCard>
                    <StatisticCard.Group direction={'column'}>
                        <StatisticCard.Group direction={'row'}>
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
                                                display: 'block'
                                            }}
                                        />
                                    )
                                }}
                            />
                            <Divider type="vertical" style={{ height: "100%" }} />
                            <StatisticCard
                                statistic={{
                                    title: "成功率",
                                    value: "30%",
                                    icon: (
                                        <img
                                            src={SuccessRateSvg}
                                            alt="icon"
                                            style={{
                                                width: 32,
                                                height: 32,
                                                marginRight: 16,
                                                display: 'block'
                                            }}
                                        />
                                    )
                                }}
                            />

                        </StatisticCard.Group>
                        <Divider type="horizontal" style={{ height: "100%" }} />
                        <StatisticCard.Group direction={'row'}>
                            <StatisticCard
                                statistic={{
                                    title: "响应率",
                                    value: "30%",
                                    icon: (
                                        <img
                                            src={ResponseRateSvg}
                                            alt="icon"
                                            style={{
                                                width: 32,
                                                height: 32,
                                                marginRight: 16,
                                                display: 'block'
                                            }}
                                        />
                                    )
                                }}
                            />
                            <StatisticCard
                                statistic={{
                                    title: "响应时间",
                                    value: "30%",
                                    icon: (
                                        <img
                                            src={RtSvg}
                                            alt="icon"
                                            style={{
                                                width: 32,
                                                height: 32,
                                                marginRight: 16,
                                                display: 'block'
                                            }}
                                        />
                                    )
                                }}
                            />
                        </StatisticCard.Group>

                    </StatisticCard.Group>
                </ProCard>

            </Col>
            <Col span={16}>
                <Card>Content</Card>
            </Col>
        </Row>
    );
};

export default BusinessCard;