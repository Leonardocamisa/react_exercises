import { useState } from "react";

export function ClickCounter() {

    const [count, setCount] = useState(0)


  const eventHandler = () => {
    setCount(count + 1)
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick = {()=>eventHandler()}>Increase</button>
    </div>
  );
}