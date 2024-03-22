import TooltipCom from '@/components/TooltipCom';
import type { TableColumnType } from 'antd';

export interface CopyableTableColumns<T = any> extends TableColumnType<T> {
  copyText?: string;
  copyTip?: string;
  noCopy?: boolean;
}

/**
 * 表格可复制的列
 * 示例:
 *   const columns = [
 *     {
 *       title: 'title',
 *       render: () => {}
 *       ...
 *       copyText: 'copyText', // 显示复制的文字，可以不用
 *       noCopy: true, // 不显示复制，默认为false
 *     },
 *   ];
 *
 */
export default (columns: CopyableTableColumns[]) => {
  if (!Array.isArray(columns)) return [];
  return columns.map((column) => {
    if (column.noCopy) return column;
    if (column.render) {
      const oldRender = column.render.bind({});
      column.render = (...args) => {
        const content = oldRender(...args);
        const copyText = column.copyText;
        const copyTip = column.copyTip;
        return (
          <TooltipCom text={copyText || content} tip={copyTip || content}>
            {content}
          </TooltipCom>
        );
      };
    } else {
      column.render = (content) => {
        const copyText = column.copyText || content;
        return <TooltipCom title={copyText}>{content}</TooltipCom>;
      };
    }
    return column;
  });
};
