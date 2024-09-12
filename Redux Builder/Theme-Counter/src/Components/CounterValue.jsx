import React from 'react';
import { useSelector } from 'react-redux';

const CounterValue = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <div className='p-3'>
      <h2>Counter: {count}</h2>
    </div>
  );
};

export default CounterValue;
