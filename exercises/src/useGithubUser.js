import { useState, useEffect } from "react";

const useGithubUser = ({username}) => {

 const [data, setData] = useState({});
 const [error,setError] = useState({})

 const getUser = async (username) => {

  try {
   const fetchUser = `https://api.github.com/users/${username}`;
 
   const fetching = await fetch(fetchUser);
 
   const json = await fetching.json();

   setData(json)
 
   console.log(json)
  } catch (error) {
   setError(error)
   setData(null)
  }
 };

 useEffect(()=>{

  getUser(username)

 },[username])

 return {data,error}
}

export default useGithubUser;