import { useEffect, useState } from "react";

export function ClickCounter({onCounterChange}) {

    const [count, setCount] = useState(0)


  const eventHandler = () => {
    setCount(count + 1)
  };

  useEffect(()=> onCounterChange(count),[count,onCounterChange])

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick = {()=>eventHandler()}>Increase</button>
    </div>
  );
}