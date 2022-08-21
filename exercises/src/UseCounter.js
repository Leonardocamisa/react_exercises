import { useEffect, useState } from "react";

const UseCounter = (amount) => {
 const [count, setCount] = useState(0)

 useEffect(()=>{
  setCount(amount)
 },[amount])

 console.log(`count by useCounter:${count}`);
}
export default UseCounter;