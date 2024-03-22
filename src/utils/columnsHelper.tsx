import TooltipCom from "@/components/TooltipCom";
import type { TableColumnType } from "antd";
import lodash from "lodash";
import React from "react";

import top1 from "@/assets/img/analysis/top_1.svg";
import top2 from "@/assets/img/analysis/top_2.svg";
import top3 from "@/assets/img/analysis/top_3.svg";

export const rankImages = [
  undefined,
  <img key="top1" style={{ height: 30 }} src={top1} />,
  <img key="top2" style={{ height: 30 }} src={top2} />,
  <img key="top3" style={{ height: 30 }} src={top3} />,
];

type RenderType = TableColumnType<any>["render"];
/**
 * 列可以显示tooltip
 */
export type TooltipColumnsType<C = TableColumnType<any>> = C & {
  /**
   * Tooltip复制的文字
   */
  tipCopyable?: React.ReactNode | RenderType;
  /**
   * Tooltip显示的文字
   */
  tipShow?: React.ReactNode | RenderType;
  /**
   * 禁用Tooltip
   */
  tipDisabled?: boolean;
};
function getContentRender(args: any[]) {
  return function (render: any) {
    const content = lodash.isFunction(render) ? render(...args) : args[0];
    return React.isValidElement(content) ? React.cloneElement(content, {}) : content;
  };
}
function isUndefinedOr(value: any, other: any) {
  return value !== undefined ? other : undefined;
}
/**
 * 列可以显示tooltip
 */
export function convertTooltipColumns(columns: TooltipColumnsType[]) {
  if (!Array.isArray(columns)) return [];
  return columns.map((column) => {
    // 禁用是返回原值
    if (column.tipDisabled) return column;
    // 备份原先render
    const backupRender = column.render?.bind({});
    column.render = function (...args) {
      const getContent = getContentRender(args);
      // show
      const tooltipShow = isUndefinedOr(column.tipShow, getContent(column.tipShow));
      // copy
      const tooltipCopy = isUndefinedOr(column.tipCopyable, getContent(column.tipCopyable));
      // 内容
      const content = getContent(backupRender);
      return (
        <TooltipCom tip={tooltipShow} text={tooltipCopy}>
          {content}
        </TooltipCom>
      );
    };
    return column;
  });
}

/**
 * 包含查询条件配置列信息
 */
export type QueryColumnsType<C = TableColumnType<any>> = C & {
  /**
   * 不在查询条件配置中显示
   */
  hideInSearch?: boolean;
  /**
   * 不在表格中显示
   */
  hideInTable?: boolean;
  /**
   * 查询条件组件类型
   */
  type?: "input" | "search" | "select" | "rangePicker" | "treeSelect" | "custom";
  /**
   * 查询条件组件配置
   */
  componentConfig?: any;
  /**
   * 查询条件自定义组件
   */
  component?: React.ReactNode;
  /**
   * select类型时使用
   */
  options?: any[];
};
