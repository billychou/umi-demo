import type { PaginationProps } from "antd";

export const numberDataIndex = "__xuhao";

export const initPagination: PaginationProps = {
  showTotal: (totals) => `共 ${totals} 条`,
  showSizeChanger: true,
  pageSizeOptions: ["50", "100", "200", "500"],
};

export const initParam = { pageSize: 50, currentPage: 1 };

export const initVirtualParam = { pageSize: 500, currentPage: 1 };

export const sizeObj: Record<string, number> = {
  small: 31,
  middle: 39,
  large: 47,
};
