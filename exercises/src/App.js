import React from 'react'
import Welcome from './Welcome'


class App extends React.Component {
    render() {
        return (
                <Welcome name={this.defaultProps} age= '25'/>
        )
    }
}

export default App;