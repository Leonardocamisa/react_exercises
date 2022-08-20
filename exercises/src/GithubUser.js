import useGithubUser from "./useGithubUser";


const GithubUser = ({ username }) => {
  const {data, error} = useGithubUser({username})

  return (
    <>
    {data !== {} ? <h1>{data.login}</h1> : <h1>{error.message}</h1>}
    </>
  );
}

export default GithubUser;