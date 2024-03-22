import type { EChartsOption } from "echarts";
import ReactEChartsCore from "echarts-for-react/lib/core";
import { LineChart, PieChart } from "echarts/charts";
import {
  DatasetComponent,
  GridComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
} from "echarts/components";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([
  CanvasRenderer,
  LineChart,
  PieChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  DatasetComponent,
]);

export type { EChartsOption };
export { ReactEChartsCore, echarts };
