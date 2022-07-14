import React from 'react'
import { Welcome } from './Welcome'
import { Age } from './Age'
import { Counter } from './Count'

export class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name={this.defaultProps} />
                <Age age={this.defaultProps} />
                <Counter />
            </div> 
        )
    }
}