import React from "react";

class Welcome extends React.Component {
   render() {
    return <div>
    <p>Hello, {this.props.name}!</p>
    <p>Your age is {this.props.age}</p>    
    </div>
   }
   
}
    
export default Welcome;