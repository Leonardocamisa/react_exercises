import React from "react"

export class Age extends React.Component {
    render (){
     return  this.props.age < 65 && this.props.age > 18? <p>Your age is, {this.props.age}</p>  : <p></p>   
    }

     static defaultProps = {
         age: 33,
     }
}