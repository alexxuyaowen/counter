import { useState } from 'react';
import './Countdown.css';

const Countdown = () => {
  const [second, setSecond] = useState(5);

  if (second >= 0) {
    setTimeout(() => {
      setSecond(second - 1);
    }, 990);
  } else {
    setSecond(5);
  }

  return <h1 className='countdown'>{second}</h1>;
};

export default Countdown;
