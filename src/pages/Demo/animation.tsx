export class FadeInAnimation {
  /**
   * construtor
   * @param node
   */
  constructor(node: any) {
    this.node = node;
  }

  /**
   *
   * @param duration
   */
  start(duration: any) {
    this.duration = duration;
    if (this.duration === 0) {
      this.onProgress(1);
    } else {
      this.onProgress(0);
    }
  }

  onFrame() {}

  onProgress(progress) {
    this.node.style.opacity = progress;
  }

  stop() {}
}
