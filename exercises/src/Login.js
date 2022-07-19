import React from "react";


export default class Login extends React.Component {

        eventHandler = (event) => {
            this.setState(
                {
                    [event.target.name] : event.target.type === 'checkbox' ? event.target.checked : event.target.value
                }
            )
        }

        state = {
            username : "",
            password : "",
            remember : true
        }

        componentDidUpdate(){
            console.log (this.state)
        }

    render (){
        return(
        <>
        <div>
            <h3>LOGIN</h3>
            <input type="text" name="username" value = {this.state.username} onChange={this.eventHandler}/>
            <input type="password" name="password" value = {this.state.password} onChange={this.eventHandler}/>
            <input type="checkbox" name="remember" checked = {this.state.remember} onChange={this.eventHandler}/>
        </div>
        </>)
    }
}