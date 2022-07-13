import React from "react";

export class Welcome extends React.Component {
   render() {
    return this.props.name === 'John' ? <p>Hello, <strong>{this.props.name}</strong>!</p> : <p></p> 
   }
   
   static defaultProps = {
      name: "John",
   }
}
    