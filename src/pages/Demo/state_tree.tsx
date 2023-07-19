import { useState } from "react";

import styles from "./index.less";

/**
 * app  component
 */
export default function App() {
    const counter = <Counter />;
    return (
        <div>
            {counter}
            {counter}
        </div>
    );
}

/**
 * counter component
 */
function Counter() {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = styles.counter;
    if  (hover)  {
        className = styles.hover;
    }
    return (
            <div 
                className={className}
                onPointerEnter={()=>setHover(true)}
                onPointerLeave={()=>setHover(false)}
            >
                <h1>{score}</h1>
                <button onClick={()=>{
                    setScore(score+1);
                }}>
                    加一
                </button>
            </div>
    );
}
