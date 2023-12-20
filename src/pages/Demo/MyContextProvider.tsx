import { createContext, useState, useContext } from "react";

const initialValues = {
    age: 10,
    addAge: () => {}
}

const DemoContext = createContext(initialValues);

export const useDemoContext = () => {
    return useContext(DemoContext);
}


type DemoContextProviderProps = {
    children: React.ReactNode
}

export const DemoContextProvider = (props: DemoContextProviderProps) => {
    const [age, setAge] = useState(10);
    const addAge = () => {
        setAge(age => age + 1);
    }
    return (
        <DemoContext.Provider value={{age, addAge}}>
            {props.children}
        </DemoContext.Provider>
    )
}
