import React from "react";

class UncontrolledLogin extends React.Component {
	state = {
		username: "",
		password: "",
		remember: true,
		compiled: false,
	};

	onLogin = (event) => {
		event.preventDefault();
		console.log(this.state);
	};

	eventHandler = (event) => {
		this.setState({
			[event.target.name]:
				event.target.type === "checkbox"
					? event.target.checked
					: event.target.value,

			compiled:
				this.state.username !== "" && this.state.password !== "" ? true : false,
		});
	};

	eventReset = () => {
		this.setState({
			username: "",
			password: "",
			remember: true,
			compiled: false,
		});
       
	};

	render() {
		return (
			<>
				<form>
					<div>
						<h3>UNCONTROLLED LOGIN</h3>
						<input type="text" name="username" onChange={this.eventHandler} />
						<input type="password" name="password" onChange={this.eventHandler} />
						<input type="checkbox" name="remember" onChange={this.eventHandler} />
					</div>
					<button
						type="submit"
						onClick={this.onLogin}
						disabled={!this.state.compiled}
					>
						LOGIN
					</button>
					<button onClick={this.eventReset}>RESET</button>
				</form>
			</>
		);
	}
}

export default UncontrolledLogin;