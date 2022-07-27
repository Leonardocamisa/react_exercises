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

    resetItems = () => {
        this.setState({
            items : []
        })
    }

    render(){
        return(
            <>
            <div>
                <h1>Lista</h1>
                <input type='text' onChange={this.addItem} value={this.state.newItems} />
                <button onClick={this.addEvent} disabled={!this.state.newItems}>aggiungi</button>
                <button onClick={this.resetItems}>ripulisci</button>
                <ul>
						{this.state.items.map((el, i) => (
							<div>
								<li key={el + i}>{el}</li>
								<button
									onClick={() => {
										this.state.items.splice(i, 1);
										this.setState({
                                            items : this.state.items
                                        })
									}}
								>
									elimina
								</button>
							</div>
						))}
					</ul>
            </div>

            </>
        )
    }
}

export default TodoList;