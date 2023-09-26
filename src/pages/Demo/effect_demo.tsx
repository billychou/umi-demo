import { useState, useEffect } from "react";
import { Card } from 'antd';
import { transformKeySubmitValue } from "@ant-design/pro-components";

const EffectDemo: React.FC = () => {
    const [number, setNumber]  = useState(0);
    const [position, setPosition] = useState({x: 0, y: 0});
    const [state, setState] = useState({
        name: "",
        selected: false,
    });

    /**
     * Case1: 连接到聊天服务器
     */
    // useEffect(()=>{
    //     const githubUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    //     const fetchPromise = fetch(githubUrl);
    //     console.log(fetchPromise);
    //     fetchPromise.then(res => {
    //         console.log(`收到相应: ${res.status}`);
    //     })
    //     console.log("已发送请求...");
    // }, []);


    /**
     * Case2: 监听全局浏览器事件 
     */
    // useEffect(()=>{
    //    function handleMove(e: any) {
    //        setPosition({x: e.clientX, y: e.clientY});
    //    } 
    //    window.addEventListener('pointermove', handleMove);
    //    return () => {
    //        window.removeEventListener('pointermove', handleMove);
    //    }
    // }, []);

    /**
     * Case3: 触发动画效果
     * 
     */
    // useEffect(()=>{

    // }, []);
    useEffect(()=>{
        const fruits = [];
        fruits.push("banana", "apple", "peach");
        console.log(fruits.length);
        fruits[5] = "mango";
        console.log(Object.keys(fruits));
        console.log(fruits.length);
        fruits.length = 10;
        console.log(fruits);
        console.log(fruits.length);
        console.log(fruits[8]);

        const arrayEmpty = new Array(2);
        console.log(arrayEmpty.length);
        console.log(0 in arrayEmpty);
        console.log(1 in arrayEmpty);
        const arrayOfOne = new Array("2");
        console.log(arrayOfOne.length);
        console.log(arrayOfOne[0]);

        const myFruits = new Array("Apple", "Bannana");
        console.log(myFruits.length);
        console.log(myFruits[0]);

        var keys = [];
        for (const i of fruits) {
            console.log(i);
        }
        
    }, []);

    return (
        <>
            <h1> 
                Welcome
            </h1>
        </>
    );
};

export default EffectDemo;