import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    } else {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  };

  const isEven = (num) => {
    return num % 2 === 0;
  };

  return (
    <div className="App">
      <h1>Welcome to Counter</h1>
      <div>
        <button onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button onClick={() => setCount(0)} className='btn'>Reset Count</button>
      <h2>Count: {count}</h2>
      <h3>This Number is: {isEven(count) ? 'Even' : 'Odd'}</h3>
      <h3>Prime Number: {isPrime(count) ? 'True' : 'False'}</h3>
    </div>
  );
}

export default Counter;
