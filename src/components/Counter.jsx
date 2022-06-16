import { useState } from 'react';

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

    console.log(count);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increaseHandler}>+</button>
      <button onClick={decreaseHandler}>-</button>
      <button onClick={alertHandler}>alert after 5s</button>
    </div>
  );
};

export default Counter;
