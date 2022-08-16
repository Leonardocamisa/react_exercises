import React from 'react'
import Welcome from './Welcome'

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name={"Scrufeis"} age={19} /> 
            </div> 
        )
    }
}

export default App;