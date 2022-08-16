import React from "react";
import {ClickCounter} from "./ClickCounter"


const onCounterChange = (state) => {
  console.log(state);
}

export function App() {
  return (
    <>
      <div>
        <ClickCounter onCounterChange = {onCounterChange}/>
      </div>
    </>
  );}