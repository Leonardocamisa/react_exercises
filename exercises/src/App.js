import React from 'react'
import Welcome from './Welcome'

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name={<strong>Antonio</strong>} age={80}/>
            </div> 
        )
    }
}

export default App;