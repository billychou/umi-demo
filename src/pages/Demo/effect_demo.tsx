import { useState, useEffect } from "react";
import { Card } from 'antd';
import useTypingEffect from "@/hooks/useTypingEffect";

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
     * Case2: 监听全局浏览器事件 
     */
    useEffect(()=>{
       function handleMove(e: any) {
           setPosition({x: e.clientX, y: e.clientY});
       } 
       window.addEventListener('pointermove', handleMove);
       return () => {
           window.removeEventListener('pointermove', handleMove);
       }
    }, []);

    /**
     * Case3: 触发动画效果
     * 
     */
    useEffect(()=>{

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
        </>
    );
};

export default EffectDemo;