import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {

  const [inputValue, setInputValue] = useState("")

  const handlerInputUsername = (event) => {
    setInputValue(event.target.value)
  }

  const handleSearchUsername = () => {
    navigate(`/users/${inputValue}`)
  }

  const navigate = useNavigate()

  return (
    <>
      <div className="userListContainer">
        <div className="userListInputContainer">
          <h3>INSERT USERNAME TO VIEW DETAILS</h3>
          <input type="text" className="userListInput" onChange={handlerInputUsername} />
          <button className="userListInputButton" onClick={handleSearchUsername}>SEARCH</button>
        </div>
        <div>
          <h4>USERNAME LIST</h4>
              <Outlet/>
        </div>
      </div>
    </>
  );
}