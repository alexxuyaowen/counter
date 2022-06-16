import { useState } from 'react';
import Button from './Button';
import Countdown from './Countdown';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const increaseHandler = () => {
    setCount(prev => prev + 1);
  };

  const decreaseHandler = () => {
    setCount(prev => prev - 1);
  };

  const alertHandler = () => {
    !show &&
      setTimeout(() => {
        let alerted = false; // prevent double alerts
        setCount(prev => {
          !alerted && alert(prev);
          alerted = true;
          return prev;
        });

        setShow(false);
      }, 5000);

    setShow(true);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <Button onClick={increaseHandler}>+</Button>
      <Button onClick={decreaseHandler}>-</Button>
      <Button onClick={alertHandler}>alert after 5s</Button>
      {show && <Countdown />}
    </div>
  );
};

export default Counter;
