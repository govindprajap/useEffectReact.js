import React, { useEffect, useState } from "react";
const UseEffect2 = ()=>{
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    useEffect(()=>{
        setCalculation(()=>count*2);
    })
    return(
        <>
        <p>count:{count}</p>
        <button onClick={()=>setCount((c)=>c+1)}>+</button>
        <p>Calculation:{calculation}</p>
        </>
    );

}
export default UseEffect2;