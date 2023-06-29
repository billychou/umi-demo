import { useState } from "react";
import { sculptureList } from "./data"

/**
 * StateDemoComponent component 
 * @returns 
 */
const StateDemoComponent: React.FC = () => {
    // let index = 0;
    const [index, setIndex] = useState(0);
    function handleClick() {
        if (index < sculptureList.length - 1) {
            setIndex(index + 1);
        }
        // index = index + 1;
    }

    let sculpture = sculptureList[index];

    return (
        <>
            <button onClick={handleClick}>Next</button>
            <h2>
                <i>{sculpture.name}</i> by {sculpture.artist}
            </h2>
            <h3>({index+1} of {sculptureList.length})</h3>
            <img src={sculpture.url} alt={sculpture.alt}></img>
            <p>{sculpture.description}</p>
        </>
    );
};

export default StateDemoComponent;
