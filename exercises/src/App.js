import React from 'react'
import Welcome from './Welcome'

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name={<strong>Pippo Baudo</strong>} age={34} />
            </div> 
        )
    }
}

export default App;