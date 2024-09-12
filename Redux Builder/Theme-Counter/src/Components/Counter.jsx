import React from 'react';
import CounterValue from './CounterValue';
import CounterButtons from './CounterButtons';
import { useSelector } from 'react-redux';

const Counter = () => {
  const { theme } = useSelector((state) => state.theme);
  // console.log(theme);

  return (
    <div className={theme === 'light' ? 'light_theme' : 'dark_theme'}>
      <CounterValue />
      <CounterButtons />
    </div>
  );
}

export default Counter;
