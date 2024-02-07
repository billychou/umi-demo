import React from 'react';
import { blue, blue1 } from '@ant-design/colors';

const ColorFC: React.FC = () => {
    console.log(blue);
    console.log(blue.primary)
    console.log()
    return (
        <div>
            <ul>
                <li style={{color: blue[0]}}>blue1</li>
                <li style={{color: blue[1]}}>blue2</li>
                <li style={{color: blue[2]}}>blue3</li>
                <li style={{color: blue[3]}}>blue4</li>
                <li style={{color: blue[4]}}>blue5</li>
                <li style={{color: blue[5]}}>blue6</li>
                <li style={{color: blue[6]}}>blue7</li>
                <li style={{color: blue[7]}}>blue8</li>
                <li style={{color: blue[8]}}>blue9</li>
                <li style={{color: blue[9]}}>blue10</li>
            </ul>
        </div>
    );
}

export default ColorFC;