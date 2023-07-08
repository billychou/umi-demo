import React, { useRef, useState } from "react";
import { Button, Card } from "antd";

let intervalId;

/**
 * RefDemoComponent
 * 秒表样例 
 * useRef is a React Hook that  lets you reference a 
 * value that's not needed for rendering
 * Reference: https://github.com/
 * 
 * useRef
 * @returns 
 */
const RefDemoComponent: React.FC = () => {
    //Call useRef at the top level of your component to declare a ref
    let ref = useRef(0);
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    /**
     *  eventHandler
     */
    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());
        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            // 每10ms更新一次当前时间
            setNow(Date.now())
        }, 10);
    }
    

    /**
     *  stop handler
     */
    const handleStop = () => {
        clearInterval(intervalRef.current);
    }

    /**
     * secondsPassed
     */
    let secondsPassed = 0;
    if  (startTime !== null && now !== null) {
        secondsPassed = (now - startTime)/1000;
    }
    
    /**
     * handleClick 
     */
    const handleClick = () => {
        ref.current = ref.current + 1;
        alert("Click " + ref.current + "次");
    }
    
    return (
        <>
            <button onClick={handleClick}>点击</button>
            <h1>时间过去了：{secondsPassed}</h1>
            <Card>
                <Button onClick={handleStart} type="primary">开始</Button> <></>
                <Button onClick={handleStop} type="primary">停止</Button>
            </Card>

        </>
    );
}

export default RefDemoComponent;