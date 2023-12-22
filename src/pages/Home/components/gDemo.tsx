import { useEffect } from 'react';
import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Text } from '@antv/g';
import { Renderer } from '@antv/g-canvas';
import React from 'react';

const GDemo:React.FC = () => {
    useEffect(() => {
        const node1 = new Circle({
            style: {
                r: 50,
                fill:'red',
                stroke: 'blue',
                lineWidth: 2,
                lineCap: 'round',
                lineJoin: 'round',
                shadowColor:'red',
            }
        });
        const text1 = new Text({
            style: {
                text: 'hello world',
                fill: 'blue',
                fontSize: 20,
                shadowColor:'red',
            }
        });
        node1.appendChild(text1);

        const renderer = new Renderer();
        const canvas = new Canvas({
            container: 'container',
            width: 500,
            height: 500,
            renderer,
        });
        canvas.addEventListener(CanvasEvent.READY, () => {
            canvas.appendChild(node1);
        });
        // canvas.draw();
    }, []);
    return (
        <div id="container"></div>
    );
};

export default GDemo;