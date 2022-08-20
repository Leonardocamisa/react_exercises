import React from "react";
import Login from "./Login";

const onLogin = (state) => {
  console.log(state);
};

const App = () => {
  return (
    <>
      <div>
        <Login onLogin={onLogin} />
      </div>
    </>
  );
}

export default App;