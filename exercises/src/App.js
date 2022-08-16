import React from 'react'
import Welcome from './Welcome'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Primo elemento</h1>
                <Welcome name={<strong>Giovanni</strong>} age={24}/>
            </div>
        )
    }
}