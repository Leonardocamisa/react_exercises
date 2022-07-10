import React from 'react'
import { Helloworld } from './HelloWorld'
import { External } from './External'


export class App extends React.Component {
    render() {
        return (
            <div>
                <Helloworld />
                <External />
            </div>
        )
    }
}