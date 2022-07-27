import React from "react";
import Login from "./Login";

class App extends React.Component {
  render() {
    return (
        <>
        <div>
          <Login onLogin = {this.onLogin}/>
        </div>
        </>
    );
  }
}

export default App;

