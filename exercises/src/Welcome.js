import React from "react";
import { render } from "react-dom";

export class Welcome extends React.Component {
   render() {
    return <p>Hello, {this.props.name}!</p>
   }
}
    