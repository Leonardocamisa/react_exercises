import React from 'react'
import { Welcome } from './Welcome'
import { Age } from './Age'
import { ClickCounter } from './ClickCounter'

export class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name={this.defaultProps} />
                <Age age={this.defaultProps} />
                <ClickCounter initialValue={100} incrementBy={4} timeout={1000} />
            </div> 
        )
    }
}