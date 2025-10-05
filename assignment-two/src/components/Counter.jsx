
import React, { useState } from 'react';

const Counter = () => {

    let [count, setCount]   = useState(0);

    let handleIncreament = () => {
        setCount(count + 1)
    }

    let handleDecreament = () => {
        setCount(count - 1)
    }
    
    let handleReset = () => {
        setCount(count = 0)
    }

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
        
          <button className="btn card__btn" onClick={handleIncreament} disabled={count>4}>+</button>
          <button className="btn card__btn" onClick={handleDecreament} disabled={count<-4}>-</button>
          <button className="btn card__btn" onClick={handleReset}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;