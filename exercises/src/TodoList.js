import React from "react";

class TodoList extends React.Component {

    state = {
        items : ['bere', 'mangiare', 'comprare vino', 'comprare sigarette', 'coding'],
        newItems : ''
    }

    addEvent = () => {
        this.setState({
            items: [...this.state.items, this.state.newItems],
            newItems  : ''
        })
    }

    addItem = (event) => {
        this.setState({
            newItems : event.target.value
        })
    }

    render(){
        return(
            <>
            <div>
                <h1>Lista</h1>
                <input type='text' onChange={this.addItem} value={this.state.newItems} />
                <button onClick={this.addEvent} disabled={!this.state.newItems}>aggiungi</button>
                <ul>
                    {this.state.items.map((el,i) => <li key={el+i}>{el}</li>)}
                </ul>
            </div>

            </>
        )
    }
}

export default TodoList;