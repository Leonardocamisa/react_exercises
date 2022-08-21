import {Link} from 'react-router-dom'

export function Welcome({name}) {
    return(
    <div>
        <Link to= "/counter">Counter</Link>
        <h1>HELLO {!name ? "WORLD" : name}</h1>
    </div>)
}