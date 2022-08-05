import React from "react";
import Login from "./Login";

  const onLogin = (state) => {
console.log(state)
  }

  export function App () {
    return (
        <>
        <div>
          <Login onLogin = {onLogin}/>
        </div>
        </>
    );
  }