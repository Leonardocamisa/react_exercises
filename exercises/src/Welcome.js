import React from "react";

class Welcome extends React.Component {
   render() {
    return <div>
    <p>Hello, <strong>{this.props.name}!</strong></p>
    <p>Your age is {this.props.age}</p>    
    </div>
   }
   
   static defaultProps = {
      name: "Giovanni",
   }
}
    
export default Welcome;