import React from "react";
import { Sum } from "./Sum";



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
		<Sum numbers = {[1,2,3,4,5]}/>
      </>
    );
  }
}