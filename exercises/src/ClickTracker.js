import React from "react";

export default class ClickTracker extends React.Component {

    state = {
        res : "Premi un bottone"
    }

    render(){
        return(
            <div>
                <h1>{this.state.res}</h1>
                <button onClick={this.eventHandler}>1</button>
                <button onClick={this.eventHandler}>2</button>
                <button onClick={this.eventHandler}>3</button>
            </div>)
    }
        
        eventHandler = (event) => {

            this.setState(
                {res : event.target.innerText}
            )
    }}
