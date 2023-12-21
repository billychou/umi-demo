import { createContext, useState } from 'react';
import { AgeInfo } from './components/AgeInfo';
import { DemoContextProvider } from './MyContextProvider';

const ContextDemo: React.FC = () => {
    return (
        <DemoContextProvider>
           <AgeInfo /> 
        </DemoContextProvider>
    )  
}

export default ContextDemo;