import React from "react"

class Age extends React.Component {
    render (){
     return  (this.props.age ) ? <p>Your age is, {this.props.age}</p>  : <p></p>   
    }

    // static defaultProps = {
    //     age: 24,
    // }
}

export default Age;