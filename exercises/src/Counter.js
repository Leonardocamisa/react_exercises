import React from "react";

class Counter extends React.Component {
    state = {
        count : 0,
    }

    handleClickingButton = (event) => {
        this.setState((state) => {
            return {
                count: state.count + 1,
            }
        })
    }

    handleClickingButton2 = (event) => {
        this.setState((state) => {
            return {
                count: state.count + 2,
            }
        })
    }

    render() {
        return <>
            <h1>Count = {this.state.count}</h1>
            <button onClick={this.handleClickingButton}>ADD 1</button>
            <button onClick={this.handleClickingButton2}>ADD 2</button>

        </>
    }
}

export default Counter;