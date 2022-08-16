import React from "react";
import Age from "./Age"

class Welcome extends React.Component {
   render() {
    return <>
    <p>Hello, {this.props.name}!</p>
    {this.props.age > 18 && <Age age={this.props.age}/> }
    </>
   }
}
   
export default Welcome;