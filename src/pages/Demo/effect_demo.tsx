import { useState, useEffect } from "react";

const EffectDemo: React.FC = () => {
    const [number, setNumber]  = useState(0);
    console.count("render");

    /**
     * useEffect
     */
    useEffect(()=>{

    });
    return (
        <div>
            <span>You  clicked {number} times!</span> 
            <button onClick={()=>setNumber(prev => prev+1)}>Increase</button>         
        </div>
    );
};

export default EffectDemo;