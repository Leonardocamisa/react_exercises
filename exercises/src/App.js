import React from 'react'
import Helloworld from './HelloWorld'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Primo elemento</h1>
                <Helloworld />
            </div>
        )
    }
}