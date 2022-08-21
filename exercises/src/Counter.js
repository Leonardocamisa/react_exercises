import { useState } from "react";
import {Link} from 'react-router-dom'

export function ClickCounter() {

    const [count, setCount] = useState(0)


  const eventHandler = () => {
    setCount(count + 1)
  };

  return (
    <div>
     <Link to="/" > Welcome</Link>
      <h1>Count : {count}</h1>
      <button onClick = {()=>eventHandler()}>Increase</button>
    </div>
  );
}