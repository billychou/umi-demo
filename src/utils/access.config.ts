import type { AccessEnum } from "@/enum";
import menu from "@public/menu.json";
export const modeData = new Map();
export const funSwitch = new Set();

export const setModeList = (data: { router: string[]; btn: string[] }) => {
  const sortObj: Record<string, number> = {};
  menu.forEach((n, index) => {
    sortObj[n.path] = (index + 1) * 100;
    if (n.subMenus && n.subMenus.length > 0) {
      n.subMenus.forEach((w, i) => {
        sortObj[w.path] = (index + 1) * 100 + (i + 1);
      });
    }
  });
  data.router.sort((a, b) => sortObj[a] - sortObj[b]);
  modeData.set("router", data.router);
  modeData.set("btn", data.btn);
};

export const setFunSwitch = (data: string[]) => {
  data.forEach((n) => {
    funSwitch.add(n);
  });
};

// type AccessReflectType = Record<string, { router?: string[]; btn?: AccessEnum[] }>;

// DIMENSION_STATISTIC,
// // TOP统计
// TOP_STATISTIC,
// //推荐统计
// RECOMMEND_STATISTIC,

// export const AccessReflect: AccessReflectType = {
//   // 维度任务
//   DIMENSION_STATISTIC: {
//     router: ["/statisticAnalysis/statisticTask/1"],
//     btn: [AccessEnum.DIMENSION_STATISTIC],
//   },
//   // TOP统计
//   TOP_STATISTIC: {
//     router: ["/statisticAnalysis/statisticTask/2"],
//     btn: [AccessEnum.TOP_STATISTIC],
//   },
//   //推荐统计
//   RECOMMEND_STATISTIC: {
//     router: ["/statisticAnalysis/statisticTask/3"],
//     btn: [AccessEnum.RECOMMEND_STATISTIC],
//   },
//   // 告警摘要 分析
//   ALERT_ABSTRACT: {
//     router: ["/recordCenter/analysisRecord", "/statisticAnalysis/analysisTask", "/systemManage/queueManage/analysis"],
//     btn: [
//       AccessEnum.ALERT_ABSTRACT,
//       // AccessEnum.QUEUE_MANAGE_ANALYSIS,
//       // AccessEnum.NOTICERECORD_ANALYSIS,
//     ],
//   },
//   // 告警治理 分析
//   ALERT_GOVERN: {
//     router: ["/recordCenter/analysisRecord", "/statisticAnalysis/analysisTask", "/systemManage/queueManage/analysis"],
//     btn: [
//       AccessEnum.ALERT_GOVERN,
//       // AccessEnum.QUEUE_MANAGE_ANALYSIS,
//       // AccessEnum.NOTICERECORD_ANALYSIS,
//     ],
//   },
//   // 异常森林 分析
//   ALERT_FOREST: {
//     router: ["/recordCenter/analysisRecord"],
//     btn: [
//       AccessEnum.ALERT_FOREST,
//       // AccessEnum.NOTICERECORD_ANALYSIS
//     ],
//   },
//   // 仪表盘
//   DASHBOARD: {
//     router: ["/dashboard"],
//     btn: [],
//   },
//   // 告警视图
//   ALERT_VIEW: {
//     router: ["/alertview", "/systemSetting/viewManage"],
//     btn: [
//       // AccessEnum.ALERTVIEW_FIELDCONFIG
//     ],
//   },
//   // 通知中心
//   NOTICE_CENTER: {
//     router: [
//       "/noticeCenter/noticeTemplate",
//       "/noticeCenter/noticeRule",
//       "/noticeCenter/silenceRule",
//       "/noticeCenter/customUser",
//       "/recordCenter/noticeRecord",
//     ],
//     btn: [
//       // AccessEnum.ALERTLIST_NOTICE_BTN
//     ],
//   },

//   // 告警配置 --------------------------------------------------
//   ALERT_HANDLE: {
//     router: ["/alertSetting/alertProcess"],
//     btn: [],
//   },
//   // 告警丰富
//   ALERT_RICH: {
//     router: ["/alertSetting/alertProcess/alertRich/list"],
//     btn: [AccessEnum.ALERT_RICH],
//   },
//   // 告警定级
//   ALERT_RANK: {
//     router: ["/alertSetting/alertProcess/alertRank/list"],
//     btn: [AccessEnum.ALERT_RANK],
//   },
//   // 告警维护
//   ALERT_MAINTENANCE: {
//     router: ["/alertSetting/alertProcess/alertMaintenance/list"],
//     btn: [AccessEnum.ALERT_MAINTENANCE],
//   },
//   // 告警过滤
//   ALERT_FILTER: {
//     router: ["/alertSetting/alertProcess/alertFilter/list"],
//     btn: [AccessEnum.ALERT_FILTER],
//   },
//   // 告警聚合
//   ALERT_AGGREGATION: {
//     router: ["/alertSetting/alertProcess/alertAggregation/list"],
//     btn: [
//       AccessEnum.ALERT_AGGREGATION,
//       // AccessEnum.ALERTLIST_ALERTAGGREGATION
//     ],
//   },
//   // 告警压缩
//   ALERT_COMPRESS: {
//     router: ["/alertSetting/alertProcess/alertCompress/list"],
//     btn: [
//       AccessEnum.ALERT_COMPRESS,
//       //  AccessEnum.ALERTLIST_COMPRESS_BTN
//     ],
//   },
//   // 告警升级
//   ALERT_UPGRADE: {
//     router: ["/alertSetting/alertProcess/alertUpgrade/list"],
//     btn: [
//       AccessEnum.ALERT_UPGRADE,
//       // AccessEnum.ALERTLIST_UPGRADE_BTN
//     ],
//   },
//   // 告警关闭
//   ALERT_CLOSE: {
//     router: ["/alertSetting/alertProcess/alertClose/list"],
//     btn: [
//       AccessEnum.ALERT_CLOSE,
//       //  AccessEnum.ALERTLIST_CLOSE_BTN
//     ],
//   },
//   // 告警派单
//   ALERT_ITSM: {
//     router: ["/alertSetting/alertProcess/alertITSM/list"],
//     btn: [
//       AccessEnum.ALERT_ITSM,
//       // AccessEnum.ALERTLIST_DISPATCH_BTN
//     ],
//   },
//   // 标签-------------------------------------------------
//   // 手动标签
//   MT_TAG: {
//     router: [],
//     btn: [AccessEnum.MT_TAG],
//   },
//   // 自动标签
//   AT_TAG: {
//     router: ["/statisticAnalysis/tagTask"],
//     btn: [
//       AccessEnum.AT_TAG,
//       // AccessEnum.NOTICERECORD_TAG
//     ],
//   },
//   // 智能标签
//   AI_TAG: {
//     router: ["/statisticAnalysis/tagTask"],
//     btn: [
//       AccessEnum.AI_TAG,
//       //  AccessEnum.NOTICERECORD_TAG
//     ],
//   },

//   // 定时任务--------------------------------------------------
//   // 告警定时清理
//   ALERT_CLEAN: {
//     router: ["/systemSetting/scheduler"],
//     btn: [AccessEnum.ALERT_CLEAN],
//   },
//   // 通知记录清理
//   NOTICE_RECORD_CLEAN: {
//     router: ["/systemSetting/scheduler"],
//     btn: [AccessEnum.NOTICE_RECORD_CLEAN],
//   },
//   // 派单记录清理
//   ITSM_RECORD_CLEAN: {
//     router: ["/systemSetting/scheduler"],
//     btn: [AccessEnum.ITSM_RECORD_CLEAN],
//   },
//   // 工单状态同步
//   ITSM_STATUS_SYNC: {
//     router: ["/systemSetting/scheduler"],
//     btn: [AccessEnum.ITSM_STATUS_SYNC],
//   },
//   // 模型定时训练
//   MODEL_TRAIN: {
//     router: ["/systemSetting/scheduler"],
//     btn: [AccessEnum.MODEL_TRAIN],
//   },
// };

/**
 *
 * @param id  可选 不传直接返回true
 * @returns 返回 boolen
 */
export const isShowBtn: (id?: AccessEnum) => boolean = (id) => {
  const btns: AccessEnum[] = modeData.get("btn") ?? [];
  if (id === undefined) {
    return true;
  }
  return btns.includes(id);
};

export const isShowRouter: (url: string) => boolean = (url) => {
  let routers: string[] = modeData.get("router") ?? [];
  // console.log(url, routers, 178);
  // if (!usedAccessUrls.includes(url)) {
  //   return true;
  // }
  return routers.includes(url);
};
