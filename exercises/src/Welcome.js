import React from "react";

class Welcome extends React.Component {
   render() {
    return <p>Hello, <strong>{this.props.name}</strong>!</p> 
   }
   
   static defaultProps = {
      name: "Giovanni",
   }
}
   
export default Welcome;