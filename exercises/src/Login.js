import { useState } from "react";
import useLogin from "./useLogin";

const Login = ({onLogin}) => {

    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
        remember: false,
        compiled: false
    })
    
    const {username, password} = useLogin(userInfo.username, userInfo.password)
    console.log(`your username is : ${username} and your password is ${password}`)

    const eventHandler = (event) => {
        setUserInfo(
            {
                ...userInfo,
                [event.target.name]:
                event.target.type === "checkbox" ? event.target.checked : event.target.value
            }
        );
    };

    return (
        <>
            <div>
                <div>
                    <h3>LOGIN</h3>
                    <input
                        type="text"
                        name="username"
                        value={userInfo.username}
                        onChange={eventHandler}
                    />
                    <input
                        type="password"
                        name="password"
                        value={userInfo.password}
                        onChange={eventHandler}
                    />
                    <input
                        type="checkbox"
                        name="remember"
                        value={userInfo.remember}
                        onChange={eventHandler}
                    />
                </div>
                    <button onClick={() => onLogin(userInfo)} 
                        disabled={userInfo.username === "" || userInfo.password === ""}>
                            LOGIN
                        </button>
            </div>
        </>
    );
}

export default Login;
