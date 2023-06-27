import React, { useRef, useState } from "react";
import { Button, Card } from "antd";

/**
 * useRef案例 
 * @returns 
 */
const RefDemoComponent: React.FC = () => {
    let ref = useRef(0);
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    let intervalId;

    /**
     * 开始定时器
     */
    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());
        intervalId = setInterval(() => {
            // 每10ms更新一次当前时间
            setNow(Date.now())
        }, 10);
    }
    

    /**
     * 结束定时器 
     */
    const handleStop = () => {
        console.log("handleStop");
        clearInterval(intervalId);
        intervalId = null;
    }

    let secondsPassed = 0;
    if  (startTime != null && now != null) {
        secondsPassed = (now - startTime)/1000;
    }
    
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
                <Button onClick={handleStop} type="ghost">停止</Button>
            </Card>

        </>
    );
}

export default RefDemoComponent;