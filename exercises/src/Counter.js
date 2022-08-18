import React from "react";
import { useEffect } from "react";
import { useState } from "react";


    export function Counter(){

        const [count, setCount] = useState(0)

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