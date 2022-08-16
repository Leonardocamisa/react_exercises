import React from "react";

export default class InteractiveWelcome extends React.Component {
  state = {
    res : ""
  }

  eventHandler = (event) => {
    this.setState({res : event.target.value})
  };
  
  render () {
    return <div>
              <Welcome name={this.state.res} />
              <input type="text" value={this.state.value} onChange={this.eventHandler} />
            </div>
  }
}

  export class Welcome extends React.Component {
    render() {
      return <h1>Welcome, {this.props.name}</h1>
    }
  }

