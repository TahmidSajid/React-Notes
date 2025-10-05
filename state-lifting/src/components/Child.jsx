import React, { useState } from 'react'

export const Child = (props) => {

    let [count , setCount] = useState(0)

    let handleIncreament = () => {
        setCount(count + 1);
    }

    let handleDecreament = () => {
        setCount(count - 1);
    }

    props.onTrigger(count);

  return (
    <>
        <button onClick={handleIncreament}>+</button>
        <button onClick={handleDecreament}>-</button>
    </>

  )
}
