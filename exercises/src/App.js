import React from 'react'
import Welcome from './Welcome'
import Age from './Age'

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name={this.defaultProps} />
                <Age age={this.defaultProps} />
            </div> 
        )
    }
}

export default App;