import React from "react";

export default class Login extends React.Component {

        eventHandler = (event) => {
            this.setState(
                {
                    [event.target.name] : event.target.type === "checkbox" ? event.target.checked : event.target.value,
                    compiled: this.state.username !== "" && this.state.password !== "" ? true : false
                }
            )
        }

        state = {
            username : "",
            password : "",
            remember : true,
            compiled : false
        }

        componentDidUpdate(){
            console.log (this.state)
        }

        render (){
            return(
                <div>
                    <h1>LOGIN NOW</h1>
                    <input type="text" name="username" value={this.state.username} onChange={this.eventHandler} />
                    <input type="password" name="password" value={this.state.password} onChange={this.eventHandler} />
                    <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.eventHandler} />
					<button onClick={() => this.props.onLogin(this.state)} disabled = {!this.state.compiled}>LOGIN</button>
                </div>
            )
        }
}
