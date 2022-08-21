import React, { useCallback, useEffect, useState } from "react";
import UseCounter from "./UseCounter"

   const Counter = () => {

        const [count, setCount] = useState(0)

        const memoizeCounter = useCallback(()=>UseCounter(count),[count])
        memoizeCounter()

        useEffect(()=>{
            const interval = setInterval(()=>{
                setCount(count + 1)
            },1000)
            
            return () => {
                clearInterval(interval)
            }
        },[count])

        return <div><h1> Count : {count}</h1></div>
    }
    export default Counter;