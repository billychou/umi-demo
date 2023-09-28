import { useState, useEffect } from "react";
import { Card } from 'antd';
import useTypingEffect from "@/hooks/useTypingEffect";
import { transformKeySubmitValue } from "@ant-design/pro-components";

const texts = [
    "This is a simple text typing effect in React",
    "This effect is created using React Hooks",
    "We can use this effect to create a typing effect for our portfolio",
    "We can also use this effect to create a typing effect for our resume",
    "or for your blog",
    "or for your landing page",
    "let's go",
];

type TextTypingEffectProps = {
    isTypeByLetter?: boolean,
    duration?: number
};


const EffectDemo: React.FC<TextTypingEffectProps> = ({
    isTypeByLetter = false,
    duration = 200,
}) => {
    const [number, setNumber]  = useState(0);
    const [position, setPosition] = useState({x: 0, y: 0});
    const [state, setState] = useState({
        name: "",
        selected: false,
    });

    const [textIndex, setTextIndex] = useState(0);
    const textToShow = useTypingEffect(texts[textIndex], duration, isTypeByLetter);

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTextIndex( (prevIndex) => 
                prevIndex >= texts.length - 1 ? 0 : prevIndex +1
            );
        }, 5000);    
        return () => {
            clearInterval(intervalId);
        }
    }, []);
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
            <h1 style={{
                padding: 30,
                textAlign: 'center',
                fontSize: 20,
                backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
                }}
            >
                Welcome
            </h1>
            <Card>
                <span className="text-black dark:text-white" key={textIndex}>
                    {textToShow}
                </span>
            </Card>
            <h1> 
                Welcome
            </h1>
        </>
    );
};

export default EffectDemo;