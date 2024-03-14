import { PAGE_INDEX_BASE } from '@/constants';
import {
  AGGREGATION_METHOD_OPTIONS,
  AUTO_GRANULARITY,
  INTERVAL_UNIT_OPTIONS,
  ORIGIN_GRANULARITY,
  TIME_SHIFT_OPTIONS,
} from '@/constants/options';
import transformLetter from '@/utils/transformLetter';
import { useUrlParams } from '@/utils/useUrlParams';
import { DatePickerValue, isRelative, resolve } from 'adder-components';
import { useRequest } from 'ahooks';
import { message } from 'antd';
import { cloneDeep } from 'lodash';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { IMetricTrainTask } from '@/services/algorithmCenter/task/interface';
import {
  postMetricTrainListApi,
  postTimeseriesApi,
} from '@/services/metricsCenter/metrics';
import {
  DerivedRule,
  DimensionFilter,
  MetricBrowserItem,
  MetricBrowserParams,
  PaginationTableParams,
  Query,
} from '@/services/metricsCenter/metrics/interface';

import CompareSvg from '@/assets/images/compare.svg';
import MovingRollupSvg from '@/assets/images/moving-rollup.svg';
import RateSvg from '@/assets/images/rate.svg';
import RollupSvg from '@/assets/images/rollup.svg';
import TimeShiftSvg from '@/assets/images/time-shift.svg';
// import AnomalyDetectionSvg from '@/assets/images/anomaly-detection.svg'

import { MenuTreeItem } from './MenuTree';

// 毫秒级
const HOUR_1 = 60 * 60 * 1000;
const HOUR_6 = 6 * HOUR_1;
const HOUR_12 = 12 * HOUR_1;
const DAY_1 = HOUR_1 * 24;
const DAY_2 = DAY_1 * 2;
const DAY_3 = DAY_1 * 3;
const DAY_5 = DAY_1 * 5;
const DAY_10 = DAY_1 * 10;
const DAY_15 = DAY_1 * 15;
const MONTH_1 = DAY_1 * 30;
const MONTH_2 = MONTH_1 * 2;
const MONTH_3 = MONTH_1 * 3;
const MONTH_6 = MONTH_1 * 6;
const YEAR_1 = DAY_1 * 365;

/**
 * 自动聚合粒度规则
 * - 1m < 6h
 * - 2m < 12h
 * - 4m < 24h
 * - 8m < 2d
 * - 15m < 3d
 * - 20m < 5d
 * - 40m < 10d
 * - 1h < 15d
 * - 2h < 1M
 * - 4h < 2M
 * - 6h < 3M
 * - 10h < 6M
 * - 24h < 1Y
 * - 2d
 * @returns granularity 秒
 */
export const getGranularity = (startTime: number, endTime: number) => {
  const diff = endTime - startTime;
  let granularity = 60; // 秒
  if (diff < HOUR_6) {
    granularity = 60;
  } else if (diff >= HOUR_6 && diff < HOUR_12) {
    granularity = 2 * 60;
  } else if (diff >= HOUR_12 && diff < DAY_1) {
    granularity = 4 * 60;
  } else if (diff >= DAY_1 && diff < DAY_2) {
    granularity = 8 * 60;
  } else if (diff >= DAY_2 && diff < DAY_3) {
    granularity = 15 * 60;
  } else if (diff >= DAY_3 && diff < DAY_5) {
    granularity = 20 * 60;
  } else if (diff >= DAY_5 && diff < DAY_10) {
    granularity = 40 * 60;
  } else if (diff >= DAY_10 && diff < DAY_15) {
    granularity = 60 * 60;
  } else if (diff >= DAY_15 && diff < MONTH_1) {
    granularity = 2 * 60 * 60;
  } else if (diff >= MONTH_1 && diff < MONTH_2) {
    granularity = 4 * 60 * 60;
  } else if (diff >= MONTH_2 && diff < MONTH_3) {
    granularity = 6 * 60 * 60;
  } else if (diff >= MONTH_3 && diff < MONTH_6) {
    granularity = 10 * 60 * 60;
  } else if (diff >= MONTH_6 && diff < YEAR_1) {
    granularity = 24 * 60 * 60;
  } else {
    granularity = 2 * 24 * 60 * 60;
  }
  // console.log('granularity', granularity)
  return granularity;
};

/**
 * @param derivedRules 衍生指标规则
 * @param granularity 指标颗粒度（自动聚合粒度或衍生指标颗粒度）
 * @returns 处理后的衍生指标规则
 */
export const derivedRulesConverter = (
  derivedRules?: DerivedRule[],
  granularity?: Key,
) => {
  const rules =
    derivedRules?.map((derivedRule) => {
      const componentsWithName =
        derivedRule.components?.filter((c) => c.name) ?? [];
      const obj = componentsWithName.reduce((res, c) => {
        res[c.name!] = c.value;
        return res;
      }, {} as any);
      const newDerivedRule: DerivedRule = {
        derivedType: derivedRule.derivedType,
        derivedGranularity: granularity,
        ...obj,
      };
      return newDerivedRule;
    }) ?? [];
  // 如果 derivedType 为 ANOMALY_DETECTION_ALGORITHM ，则删除该对象
  const rulesFilter = rules.filter(
    (item) => item.derivedType !== 'ANOMALY_DETECTION_ALGORITHM',
  );

  return rulesFilter;
};

/** 维度过滤数组 中添加 分表维度 */
const dimensionFiltersConverter = (
  dimensionFilters: DimensionFilter[],
  divisionDimensionCode?: string,
  divisionDimensionValue?: string,
) => {
  if (!divisionDimensionCode || !divisionDimensionValue)
    return dimensionFilters;

  // 分表维度 在 维度过滤数组 中是否存在
  const find = dimensionFilters.find(
    (item) => item.dimensionCode === divisionDimensionCode,
  );
  const newValue = divisionDimensionValue ? [divisionDimensionValue] : [];
  const result = find
    ? dimensionFilters.map((item) => ({
        ...item,
        dimensionValues:
          item.dimensionCode === divisionDimensionCode
            ? newValue
            : item.dimensionValues,
      }))
    : dimensionFilters.concat([
        {
          dimensionCode: divisionDimensionCode ?? '',
          op: 'EQ',
          dimensionValues: newValue,
        },
      ]);

  return result;
};

/** 指标时序数据接口hook
 * @param datePickerValue 日期选择器的值
 * @param interval 定时刷新时间间隔
 * @param queries query参数
 * @returns [list, loading, noMoreData, getData, overtime] list:分页后的全量数据
 */
const useMetricBrowser = (
  pageSize: number,
  /** 聚合粒度已选值 */
  granularityValue: string,
  datePickerValue: DatePickerValue,
  interval: number,
  queries: Query[],
): [
  MetricBrowserItem[],
  boolean,
  boolean,
  (forceRefresh?: boolean) => void,
  boolean,
] => {
  /** 用于判断， params 没有发生改变时，不调接口 */
  const origin = useRef('');

  // 接口是否超时
  const [overtime, setOvertime] = useState(false);

  const [, setSearchParams] = useSearchParams();

  const searchParams = useMemo(() => {
    const str = JSON.stringify(queries);
    const encode = encodeURIComponent(str);
    return {
      startTime: datePickerValue.from,
      endTime: datePickerValue.to,
      granularity: granularityValue,
      query: encode,
    };
  }, [datePickerValue.from, datePickerValue.to, granularityValue, queries]);

  // 将查询参数放到地址栏
  useUrlParams(searchParams, setSearchParams);

  const {
    data,
    loading,
    run: postTimeseries,
  } = useRequest(postTimeseriesApi, {
    debounceWait: 500,
    manual: true,
    onSuccess: (data) => {
      // console.log('onSuccess -> data', data)
      setOvertime(false);
    },
    onError: (e) => {
      // console.log('onError -> e', e)
      if (e.code === 4111) {
        setOvertime(true);
      }
    },
  });

  const params = useMemo(() => {
    // 开始时间、结束时间
    const startTime = datePickerValue.from;
    const endTime = datePickerValue.to;

    // 计算聚合粒度
    const granularity =
      granularityValue === AUTO_GRANULARITY
        ? getGranularity(startTime, endTime)
        : Number(granularityValue);

    // eslint-disable-next-line no-console
    console.log('queries', queries);
    // console.log('encodeQueries', encodeURIComponent(JSON.stringify(queries)))
    const cloneQueries = cloneDeep(queries);

    // 过滤出已启用的query
    const queriesWithOpen = cloneQueries.filter((query) => query.open);
    // console.log('queryWithOpen', queriesWithOpen)
    // 过滤出带有指标的query
    const queriesWithMetric = queriesWithOpen.filter(
      (query) => query.metricCode,
    );
    // console.log('queriesWithMetric', queriesWithMetric)

    const newQueries = queriesWithMetric.map((query) => {
      const key = transformLetter(query.key as number);

      const dimensionFilters = dimensionFiltersConverter(
        query.dimensionFilters,
        query.divisionDimensionCode,
        query.divisionDimensionValue,
      );
      // console.log('dimensionFilters', dimensionFilters)

      // 遍历derivedRules，将components中有name的对象过滤出来，然后将name和value以key、value的形式展开到上一层
      const derivedRules =
        granularityValue === ORIGIN_GRANULARITY || query.valueType !== 'float'
          ? undefined
          : derivedRulesConverter(query.derivedRules, granularity);
      // console.log('derivedRules', derivedRules)

      // 删除 query 中的多余属性
      delete query.division;
      delete query.divisionDimensionCode;
      delete query.divisionDimensionValue;
      // 当 聚合粒度是原始粒度 或者 valueType 不是 float 时，删除聚合规则
      if (
        granularityValue === ORIGIN_GRANULARITY ||
        query.valueType !== 'float'
      ) {
        delete query.aggregationRule;
      }

      return {
        ...query,
        key,
        dimensionFilters,
        derivedRules,
      };
    });
    // console.log('newQueries', newQueries)

    const body: PaginationTableParams<MetricBrowserParams> = {
      currentPage: PAGE_INDEX_BASE,
      pageSize,
      data: {
        startTime,
        endTime,
        granularity,
        queries: newQueries,
      },
    };

    return body;
  }, [
    datePickerValue.from,
    datePickerValue.to,
    granularityValue,
    pageSize,
    queries,
  ]);

  /** 点击刷新按钮 或 定时刷新时，方法参数传true，不需要判断接口参数是否发生改变，强制调接口 */
  const getData = useCallback(
    (forceRefresh?: boolean) => {
      // 开始时间、结束时间
      const startTime = datePickerValue.from;
      const endTime = datePickerValue.to;
      // 当聚合粒度是原始粒度时，如果时间范围大于一个月，则报错提示用户
      const diff = endTime - startTime;
      if (granularityValue === ORIGIN_GRANULARITY && diff > MONTH_1) {
        message.error('当聚合粒度是原始粒度时，时间范围不能大于一个月！');
        return;
      }

      if (!params.data.queries.length) return;

      const str = JSON.stringify(params);
      if (origin.current === str && !forceRefresh) return;
      origin.current = str;

      // 如果时间范围是相对时间，则需要重新获取开始时间和结束时间
      if (isRelative(datePickerValue)) {
        const [startTime, endTime] = resolve(datePickerValue);
        // console.log('startTime, endTime', startTime, endTime)
        postTimeseries({
          ...params,
          data: {
            ...params.data,
            startTime,
            endTime,
          },
        });
        return;
      }

      postTimeseries(params);
    },
    [datePickerValue, granularityValue, params, postTimeseries],
  );

  useEffect(() => {
    getData();
  }, [getData]);

  // 定时器
  const timerRef = useRef<any>(null);

  // 定时刷新
  useEffect(() => {
    if (interval) {
      timerRef.current = setInterval(() => {
        // console.log('timerRef.current', timerRef.current)
        getData(true);
      }, interval);
    }

    return () => {
      // interval发生改变后会先停止定时器
      // console.log('clearInterval', timerRef.current)
      clearInterval(timerRef.current);
    };
  }, [getData, interval]);

  const [list, setList] = useState<MetricBrowserItem[]>([]);

  const [noMoreData, setNoMoreData] = useState(false);

  useEffect(() => {
    // console.log('data', data)
    if (!data) {
      setList([]);
      return;
    }

    setList(data.items ?? []);
  }, [data]);

  useEffect(() => {
    if (!data) return setNoMoreData(true);
    const { items, pageSize, totalRecord } = data;
    if (!items) return setNoMoreData(true);

    if (items.length < pageSize || totalRecord <= pageSize) {
      setNoMoreData(true);
    } else {
      setNoMoreData(false);
    }
  }, [data]);

  return [list, loading, noMoreData, getData, overtime];
};

/* 任务列表hook */
const useTaskList = (): [IMetricTrainTask[] | undefined] => {
  const { data: metricTrainList, run: postMetricTrainList } = useRequest(
    postMetricTrainListApi,
    {
      manual: true,
    },
  );

  // 定时刷新
  useEffect(() => {
    let timer: any;

    // console.log('window.__FEATURE_SWITCH__', window.__FEATURE_SWITCH__)
    if (window.__FEATURE_SWITCH__) {
      postMetricTrainList();
      timer = setInterval(() => {
        postMetricTrainList();
      }, 5000);
    }

    return () => {
      // 依赖发生改变后会先停止定时器
      clearInterval(timer);
    };
  }, [postMetricTrainList]);

  // console.log('metricTrainList', metricTrainList) // undefined
  return [metricTrainList];
};

/* 菜单树hook */
const useMenuTree = () => {
  // const algorithm = window.__FEATURE_SWITCH__
  //   ? [
  //       {
  //         key: 'ALGORITHM',
  //         label: '算法',
  //         children: [
  //           {
  //             key: 'ANOMALY_DETECTION_ALGORITHM',
  //             label: '异常检测算法',
  //             info: {
  //               prief:
  //                 '对时间间隔固定、具有一定时序特征或者周期特征的时序数据进⾏检测，识别出反常的异常点',
  //               picture: AnomalyDetectionSvg,
  //             },
  //           },
  //         ],
  //       },
  //     ]
  //   : []

  const menuTreeData: MenuTreeItem[] = [
    {
      key: 'TIME_SHIFT',
      label: '时间平移',
      children: [
        {
          key: 'TIME_SHIFT_1H',
          label: '一小时前',
          info: {
            prief: '将指标数据向前平移一小时',
            picture: TimeShiftSvg,
          },
        },
        {
          key: 'TIME_SHIFT_1D',
          label: '一天前',
          info: {
            prief: '将指标数据向前平移一天',
            picture: TimeShiftSvg,
          },
        },
        {
          key: 'TIME_SHIFT_1W',
          label: '一周前',
          info: {
            prief: '将指标数据向前平移一周',
            picture: TimeShiftSvg,
          },
        },
        {
          key: 'TIME_SHIFT_4W',
          label: '四周前',
          info: {
            prief: '将指标数据向前平移四周',
            picture: TimeShiftSvg,
          },
        },
      ],
    },
    {
      key: 'TIME_AGGREGATION',
      label: '时间聚合',
      children: [
        {
          key: 'ROLLUP',
          label: '滚动聚合',
          info: {
            prief: '按照指定时间汇总聚合指标',
            summary:
              '平均（Avg）、加总（Sum）、最小值（Min）、最大值（Max）、个数（Count）',
            timeUnit: '分钟、小时、天、周',
            picture: RollupSvg,
          },
          components: [
            {
              type: 'select',
              name: 'derivedAggregationRule',
              value: 'AVG',
              options: AGGREGATION_METHOD_OPTIONS,
            },
            {
              type: 'text',
              label: '每',
            },
            {
              type: 'number',
              name: 'timeWindow',
              value: 1,
            },
            {
              type: 'select',
              name: 'unit',
              value: 'm',
              options: INTERVAL_UNIT_OPTIONS,
            },
          ],
        },
        {
          key: 'MOVING_ROLLUP',
          label: '滑动聚合',
          info: {
            prief: '聚合组合最后 X 秒内的指标点',
            summary:
              '平均（Avg）、加总（Sum）、最小值（Min）、最大值（Max）、个数（Count）',
            timeUnit: '秒',
            picture: MovingRollupSvg,
          },
          components: [
            {
              type: 'number',
              name: 'timeWindow',
              value: 60,
            },
            {
              type: 'text',
              name: 'unit',
              label: '秒',
              value: 's',
            },
            {
              type: 'text',
              label: '聚合方式',
            },
            {
              type: 'select',
              name: 'derivedAggregationRule',
              value: 'AVG',
              options: AGGREGATION_METHOD_OPTIONS,
            },
          ],
        },
      ],
    },
    {
      key: 'RATE',
      label: '速率',
      children: [
        {
          key: 'VALUE_DIFF',
          label: '增量值',
          info: {
            prief: '计算汇总指标增量',
            picture: RateSvg,
          },
        },
      ],
    },
    {
      key: 'COMPARE',
      label: '比较',
      children: [
        {
          key: 'YOY',
          label: '同比',
          info: {
            prief: '聚合组合最后 X 秒内的指标点，并与平移时间段的数据进行比较',
            summary:
              '平均（Avg）、加总（Sum）、最小值（Min）、最大值（Max）、个数（Count）',
            timeUnit: '秒',
            picture: CompareSvg,
          },
          components: [
            {
              type: 'select',
              name: 'timeShiftSeconds',
              value: 3600,
              options: TIME_SHIFT_OPTIONS,
            },
            {
              type: 'number',
              name: 'timeWindow',
              value: 60,
            },
            {
              type: 'text',
              name: 'unit',
              label: '秒',
              value: 's',
            },
            {
              type: 'text',
              label: '聚合方式',
            },
            {
              type: 'select',
              name: 'derivedAggregationRule',
              value: 'AVG',
              options: AGGREGATION_METHOD_OPTIONS,
            },
          ],
        },
        {
          key: 'MOM',
          label: '环比',
          info: {
            prief: '按照指定时间汇总聚合指标，并与上个时间段的数据进行比较',
            summary:
              '平均（Avg）、加总（Sum）、最小值（Min）、最大值（Max）、个数（Count）',
            timeUnit: '分钟、小时、天、周',
            picture: CompareSvg,
          },
          components: [
            {
              type: 'select',
              name: 'derivedAggregationRule',
              value: 'AVG',
              options: AGGREGATION_METHOD_OPTIONS,
            },
            {
              type: 'text',
              label: '每',
            },
            {
              type: 'number',
              name: 'timeWindow',
              value: 1,
            },
            {
              type: 'select',
              name: 'unit',
              value: 'm',
              options: INTERVAL_UNIT_OPTIONS,
            },
          ],
        },
      ],
    },
    // ...algorithm,
  ];

  return menuTreeData;
};

export { useMetricBrowser, useTaskList, useMenuTree };
