import { useEffect, useState, useRef } from "react";
import {
    Canvas,
    CanvasEvent,
    Circle,
    Text,
    Line
} from '@antv/g';
import { Renderer } from '@antv/g-canvas';
import interact from 'interactjs';

/**
 * g-demo 
 * @returns 
 */
export default function GDemo() {
    useEffect(() => {
        const node1 = new Circle({
            style: {
                // cx: 200,
                // cy: 200,
                r: 30,
                fill: "green",
                stroke: 'blue',
                lineWidth: 2,
                lineCap: 'round',
                lineJoin: 'round',
                shadowColor: 'red',
                cursor: 'pointer',
            }
        });

        const node2 = new Circle({
            style: {
                r: 30,
                fill: "green",
                stroke: "blue",
                lineWidth: 2,
                lineCap: 'round',
                lineJoin: 'round',
                shadowColor: 'red',
                cursor: 'pointer',
            }
        });

        const text1 = new Text({
            style: {
                text: 'start',
                fill: '#fff',
                fontSize: 22,
                textAlign: 'center',
                textBaseline: 'middle',
            }
        });

        const text2 = new Text({
            style: {
                text: "end",
                fill: "#fff",
                fontSize: 22,
                textAlign: 'center',
                textBaseline: 'middle',
            }
        });
        node1.appendChild(text1);
        node1.setPosition(200, 200);

        node2.appendChild(text2);
        node2.setPosition(400, 200);

        const renderer = new Renderer();

        const edge = new Line({
            style: {
                x1: 200,
                y1: 200,
                x2: 400,
                y2: 200,
                lineWidth: 2,
                fill: 'red',
                stroke: "red"
            },
        });

        const canvas = new Canvas({
            container: 'container',
            background: "gray",
            width: 800,
            height: 800,
            renderer,
        });

        canvas.appendChild(edge);
        canvas.appendChild(node1);
        canvas.appendChild(node2);

        node1.addEventListener('mouseenter', () => {
            node1.style.fill = "red";
            console.log("node1 mouseenter");
        });

        node1.addEventListener("mouseleave", () => {
            node1.style.fill = "green";
            console.log("node1 mouseleave");
        });

        node2.addEventListener('mouseenter', () => {
            node2.style.fill = "red";
            console.log("node2 mouseenter");
        });

        node2.addEventListener("mouseleave", () => {
            node2.style.fill = "green";
            console.log("node2 mouseleave");
        });

        interact(node1, {
            context: canvas.document,
        }).draggable({
            onmove: function (event) {
                console.log(event);
                const { dx, dy } = event;
                node1.translateLocal(dx, dy);
                const [x1, y1] = node1.getLocalPosition();
                edge.style.x1 = x1;
                edge.style.y1 = y1;
            },
        });
    }, []);
    return (
        <div id="container"></div>
    );
}
