import { Line } from '@antv/g6';

/**
 *  自定义线
 */
export class AntLine extends Line {
  onCreate() {
    this.shapeMap.key.animate(
      [{ lineDashOffset: -20 }, { lineDashOffset: 0 }],
      {
        duration: 500,
        iterations: Infinity,
      },
    );
  }
}
