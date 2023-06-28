import React, { useRef, useState } from "react";
import { Button, Card } from "antd";

/**
 * ref， 
 * 当你希望组件记住一些信息，但不希望这些信息重新触发渲染的时候，你可以使用ref，它像一个秘密的口袋，用于在组件中存储信息
 */

let intervalId;
/**
 * useRef案例 
 * @returns 
 */
const RefDemoComponent: React.FC = () => {
    console.log("开始渲染");
    let ref = useRef(0);
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    /**
     * 开始
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
     * 停止 
     */
    const handleStop = () => {
        clearInterval(intervalRef.current);
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