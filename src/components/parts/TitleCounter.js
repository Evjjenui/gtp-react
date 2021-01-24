import React, {useState, useEffect} from "react";

function TitleCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `!!! ${count} CLICKS !!!.`
  });

  return (
    <div>
      <p>Clicked {count} times.</p>
      <button
        onClick = {() => setCount(count + 1)}
      >
        Increase counter
      </button>
    </div>
  )
};

export default TitleCounter;
