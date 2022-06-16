import { useState } from 'react';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseHandler = () => {
    setCount(prev => prev + 1);
  };

  const decreaseHandler = () => {
    setCount(prev => prev - 1);
  };

  let alertHandler = () => {
    setTimeout(() => {
      let alerted = false;
      setCount(prev => {
        !alerted && alert(prev);
        alerted = true;
        return prev;
      });
    }, 5000);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <Button onClick={increaseHandler}>+</Button>
      <Button onClick={decreaseHandler}>-</Button>
      <Button onClick={alertHandler}>alert after 5s</Button>
    </div>
  );
};

export default Counter;
