import { useState } from "react";

import styles from "./index.less";

/**
 * app  component
 */
export default function App() {
    const [showB, setShowB] = useState(true);
    return (
        <div>
            <Counter />
            {showB && <Counter />}
            <label htmlFor="">
                <input type="checkbox"  checked={showB} onChange={e => { 
                    setShowB(e.target.checked);
                }} />
                渲染第二个计数器
            </label>
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