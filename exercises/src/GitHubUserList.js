import { useState } from "react"
import GitHubUser from "./GitHubUser"

export default function GitHubUserList (){
    const [array, setArray] = useState([])
    const [inputValue, setInputvalue] = useState("")


    const handleInput = (event) =>{
        setInputvalue(event.target.value)
    }

    const handleSubmit = (event) =>{
        setArray([...array, inputValue])
    }

    return(
        <div>
            <ul>
                {array.map((value, index) => (
                    <li key={value+index}><GitHubUser username={value} /></li>
                ))}

            </ul>
            <input onChange={handleInput} name="username" />
            <button onClick={handleSubmit}>Add user</button>
        </div>
    )
}