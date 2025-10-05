import React, { useState } from 'react'

export default function Counter() {

    let [count,setCount] = useState(0);

    let handleIncreament = (event) => {
        setCount((count) => count + 1)
        setCount((count) => count + 1)
        setCount((count) => count + 1)
        event.stopPropagation();
      };
    let handleOutside = () => {
        console.log('okay');
    };


  return (
    <>
      <div onClick={handleOutside}>
        <div>{count}</div>
        <button onClick={handleIncreament}>+</button>
      </div>
    </>
  )
}
