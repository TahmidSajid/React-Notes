import React, { useState } from 'react'

export default function Counter() {

    let [count,setCount] = useState(0);

    let handleIncreament = () => {
        setCount((count) => count + 1)
        setCount((count) => count + 1)
        setCount((count) => count + 1)
    };
    // let handleIncreament = () => {
    //     setCount((count) => {
    //             return count + 1
    //         } 
    //     )
    //     setCount((count) => {
    //             return count + 1
    //         } 
    //     )
    //     setCount((count) => {
    //             return count + 1
    //         } 
    //     )
    // };


  return (
    <>
        <div>{count}</div>
        <button onClick={handleIncreament}>+</button>
    </>
  )
}
