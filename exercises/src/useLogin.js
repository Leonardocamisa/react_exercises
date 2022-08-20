import { useEffect, useState } from "react";

const useLogin = (userName, passWord) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        setUsername(userName)
        setPassword(passWord)
    },[userName, passWord])

    console.log(`your username is: ${username} and your password is: ${password}`)

    return {username, password}
}

export default useLogin;

