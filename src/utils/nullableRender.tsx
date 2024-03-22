import { EmptyColumnIcon } from "@/components/Icons";
import TooltipCom from "@/components/TooltipCom";

// 判断值是否为空
export function isEmptyValue(val: any) {
  return [null, undefined, ""].includes(val);
}

// 获取提示props
function getTooltipProps(props, args) {
  if ("function" === typeof props) {
    return props(...args);
  }
  return props;
}

/**
 * 允许字段缺失的表格列渲染函数
 *
 * @param   {Function}        [columnRender]            - 列的渲染函数
 * @param   {Object}          [options]                 - 可配置属性
 * @param   {Function}        [options.isEmptyHandler]  - 配置判断是否为字段缺失
 * @param   {Function,Object} [options.tooltipProps]    - 字段提示props
 * @return  {Function} - 列的渲染函数
 *
 * 示例:
 *   const columns = [
 *     {
 *       title: 'title',
 *       render: nullableRender(),
 *     },
 *   ];
 */
export default function (columnRender, options?: any) {
  return function (...args) {
    // 字段缺失处理方式
    const isEmptyState = options?.isEmptyHandler?.(...args);
    if (isEmptyState === true || (isEmptyState !== false && isEmptyValue(args[0]))) {
      return <EmptyColumnIcon {...getTooltipProps(options?.tooltipProps, args)} />;
    }
    // 渲染函数处理方式
    if ("function" === typeof columnRender) {
      return columnRender(...args);
    }
    // 默认处理方式
    return <TooltipCom {...getTooltipProps(options?.tooltipProps, args)}>{args[0]}</TooltipCom>;
  };
}
