/**
 * 实现图编辑
 * 1. stencil选择节点类型， 节点类型支持应用、应用子系统、服务、部署单元
 * 2. 拖拽节点到画布上，节点类型支持应用、应用子系统、服务、部署单元
 */
import React from 'react';
import CustomNode from './components/CustomNode';

const X6Demo: React.FC = () => {
  return (
    <>
      <CustomNode></CustomNode>
    </>
  );
};

export default X6Demo;
