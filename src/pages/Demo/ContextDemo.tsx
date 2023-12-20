import { createContext, useState } from 'react';
import { AgeInfo } from './components/AgeInfo';

interface contextValueType {
    age: number;
    addAge: () => void;
}

const initialValue: contextValueType = {
    age: 10,
    addAge: () => {}
}

export const MyContext = createContext(initialValue);

const ContextDemo: React.FC = () => {
    const [age, setAge] = useState(10);
    const addAge = () => {
        setAge(age => age + 1);
    }
    return (<>
        <MyContext.Provider value={{age, addAge}}>
           <AgeInfo /> 
        </MyContext.Provider>
    </>)  
}

export default ContextDemo;