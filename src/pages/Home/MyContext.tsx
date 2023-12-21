import { createContext } from "react";

interface MyContextType  {
    color: number;
}

const initialValue: MyContextType = {color: 1}

export const MyContext = createContext(initialValue);