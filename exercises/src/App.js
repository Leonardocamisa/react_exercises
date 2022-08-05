import React from "react";
import { Welcome } from "./Welcome";


export class App extends React.Component {
  state = {
    language: "en",
  };

  handleLenguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
    console.log(this.state);
  };

  onLogin = (state) => console.log(state);

  render() {
    return (
      <>
        <Welcome />
      </>
    );
  }
}