import React, { useEffect, useState } from "react";

const UseEffect = ()=>{
    const [count, setCount] = useState(0);
    useEffect(()=>{
        setTimeout(() => {
            setCount((count)=> count+1);
        }, 1000);
        
    });
    

    
    
    return(
      <>
          <h1>I have render{count} ❤️!time</h1>
      </>
    );
}
export default UseEffect;
// const [count, setCount] = useState(100);
//     useEffect(()=>{
//         setTimeout(() =>{
//             setCount((count)=> count+1)
            
//         }, 1000);