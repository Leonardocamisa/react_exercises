import React from "react";

class TodoList extends React.Component {

        state = {
            items : ['Pino', 'Andrea', 'Willy', "Paola"],
            newItem : ""
        }

        addEvent = () => {

            this.setState({
                items : [...this.state.items,this.state.newItem],
                newItem : ""
            })
        }

        addItem = (event) => {
            this.setState({
                newItem : event.target.value
            })
        }

    render(){
        return(
        <>
        <div>
            <h1>TODO LIST</h1>
            <input type="text" onChange={this.addItem} value = {this.state.newItem}/>
            <button onClick={this.addEvent} disabled={!this.state.newItem}>ADD</button>
            <ul>
                {this.state.items.map((el,i) => <li key={el+i}>{el}</li>)}
            </ul>
        </div>
        </>)
    }
}

export default TodoList;