import React from "react";

class Container extends React.Component {
    render() {
        return  <div className="parent-wrapper">
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                </div>
    }
}

export default Container;