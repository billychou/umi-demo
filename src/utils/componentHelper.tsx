import React from "react";

/**
 * 组件预设props
 */
export function byPresetProps<P extends Record<string, any>>(Comp: React.FC<P>, presetProps?: Partial<P> | null) {
  return (props: P) => <Comp {...presetProps} {...props} />;
}
