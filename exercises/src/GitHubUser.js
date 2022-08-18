import { useEffect, useState } from "react"

export default function GitHubUser ({username}){

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    async function fetchinGithub(username){

        setLoading(true)
        setError(null)
        try{
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()

            setUser(json.login)
        }catch(error){
            setError(error)
            setUser(null)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchinGithub(username)
    }, [username])

    return(
        <div>
            <h1>
                {loading && "Loading..."}
                {user && user}
            </h1>
        </div>
    )
}