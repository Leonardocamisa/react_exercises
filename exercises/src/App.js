import React from 'react'
import { Welcome } from './Welcome'
import { Age } from './Age'


export class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name={this.defaultProps}/>
                <Age />
            </div> 
        )
    }
}