import { useState } from "react" 

function Counter() {
    const [count,setCount]=useState(0);

    const artir=()=>{
        setCount(1);
    };

    const azalt=()=>{
        setCount(count - 1);
    };
    return (
        <div>

        <h1>{count}</h1>
        <button onClick={azalt}> Azalt</button>
        <button onClick={artir}> Artır</button>
    </div>
);
}

export default Counter