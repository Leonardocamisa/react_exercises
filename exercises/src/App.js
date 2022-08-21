import React from "react";
import { Welcome } from "./Welcome";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { ClickCounter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { useState } from "react";
import { NotFound } from "./NotFound";
import { GithubUserList } from "./GithubUserList";

export function App() {

  const navigate = useNavigate()

  const [usernameValue,setUsernameValue] = useState()

   const handleNavigate = () => {

    navigate(`/users/${usernameValue}`)

   }

  return (
    <>
      <div>
        <ul style={{ display: "flex", listStyleType: "none", gap: "20px" }}>
          <li>
            <Link to={"/"}>WELCOME</Link>
          </li>
          <li>
            <Link to={"/counter"}>COUNTER</Link>
          </li>
          <li>
            <input type="text" onKeyUp={(e)=>setUsernameValue(e.target.value)}/>
            <button onClick={handleNavigate}>USERNAME</button>
          </li>
          <li>
          <Link to={"/users"}>USERS</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Welcome name="ERIK" />}></Route>
          <Route path="counter" element={<ClickCounter />}></Route>
          <Route path="users" element={<GithubUserList />}>
          <Route index element= {<div>Add a user and select it</div>}/>
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}