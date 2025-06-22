import React, { useState } from 'react'

export default function CountableBttn() {

    const [count,setCount] = useState(0);
  
    const incrementCount = () => {
        setCount(count+1)
    }

return (
    <>
    <button type='button' onClick={incrementCount}>click me</button>
    <h1>{count}</h1>
    </>
  )
}
