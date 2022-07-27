import React from "react";

export default class InteractiveWelcome extends React.Component {
  
    state = {
        res : ""
    }

    eventHandler = (event) => {
        
    this.setState(
        {
            res : event.target.value
        }
    )
  };

  render() {
    return (
      <>
        <div className="welcome">
          <input type="text" onChange={this.eventHandler} />
          <Welcome name = {this.state.res}/>
        </div>
      </>
    );
  }
}

export class Welcome extends React.Component {
  render() {
    return <h2> Welcome, {this.props.name}</h2>;
  }
}