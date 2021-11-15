import React, {useState, useEffect} from "react";

function Timer () {
  const [count, setCount] = useState(0);

  function tick() {
    setCount(count + 1)
  };

  useEffect(() => {
    const intervalId = setInterval(tick, 1000);
    
    return function cleanup() {
      clearInterval(intervalId);
    };
  });

  return (
    <div>
      Секундомер: {count} .
    </div>
  )
};

export default Timer;
