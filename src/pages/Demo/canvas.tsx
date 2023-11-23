import { useEffect, useState, useRef } from "react";
import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Text } from '@antv/g';
import { Renderer } from '@antv/g-canvas';

/**
 * g-demo 
 * @returns 
 */
export default function GDemo() {
    useEffect(() => {
        const node1 = new Circle({
            style: {
                r: 50,
                fill: "green",
                stroke: 'red',
                lineWidth: 2,
                lineCap: 'round',
                lineJoin: 'round',
                shadowColor:'red',
            }
        });
        const text1 = new Text({
            style: {
                text: 'hello',
                fill: 'blue',
                fontSize: 5,
                shadowColor:'red',
            }
        });
        node1.appendChild(text1);
        const renderer = new Renderer();
        const canvas = new Canvas({
            container: 'container',
            x: 400,
            y: 400,
            width: 500,
            height: 500,
            renderer,
        });
        canvas.addEventListener(CanvasEvent.READY, () => {
            canvas.appendChild(node1);
        });

    }, []);
    return (
        <div id="container"></div>
    );
}
