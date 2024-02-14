import React from 'react';
import { AgeInfo } from './components/AgeInfo';
import { DemoContextProvider } from './MyContextProvider';

interface ContextDemoProps {}

const ContextDemo: React.FC<ContextDemoProps> = () => {
  return (
    <DemoContextProvider>
      <AgeInfo />
    </DemoContextProvider>
  );
};

export default ContextDemo;
