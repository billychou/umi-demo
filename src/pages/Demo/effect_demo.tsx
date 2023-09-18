import { useState, useEffect } from "react";
import { Card } from 'antd';

const EffectDemo: React.FC = () => {
    const [number, setNumber]  = useState(0);
    const [position, setPosition] = useState({x: 0, y: 0});
    const [state, setState] = useState({
        name: "",
        selected: false,
    });
    console.count("render");

    /**
     * Case1: 连接到聊天服务器
     */
    useEffect(()=>{
        const githubUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
        const fetchPromise = fetch(githubUrl);
        console.log(fetchPromise);
        fetchPromise.then(res => {
            console.log(`收到相应: ${res.status}`);
        })
        console.log("已发送请求...");
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
                opacity: 0,
                color: 'white',
                padding: 50,
                textAlign: 'center',
                fontSize: 50,
                backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
                }}
            >
                Welcome
            </h1>
            {/* <Card title="global_register">        
                <div style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    opacity: 0.6,
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    pointerEvents: 'none',
                    left: -20,
                    top: -20,
                    width: 40,
                    height: 40,
                }}>
                </div>
            </Card> */}

        </>


    );
};

export default EffectDemo;