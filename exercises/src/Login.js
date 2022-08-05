import { useEffect, useState } from "react";


export default function Login({onLogin}) {

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const eventHandler = (event) => {
			setUserInfo(
					{
						...userInfo,
						      [event.target.name]:
        event.target.type === "checkbox" ? event.target.checked : event.target.value,
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
            checked={userInfo.remember}
            onChange={eventHandler}
          />
        </div>
        <button onClick={() => onLogin(userInfo)} disabled={userInfo.username === "" || userInfo.password === ""}>
          LOGIN
        </button>
      </div>
    </>
  );
}