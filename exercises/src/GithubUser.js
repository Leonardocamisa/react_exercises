import useGithubUser from "./useGithubUser";


const GithubUser = ({ username }) => {
  const {data, error, status} = useGithubUser({username})
  return (
    <>
    {!status && <h1>Loading...</h1>}
    {status === 200 ? <h1>{data.login}</h1> : <h1>{error.message}</h1>}
    </>
  );
}

export default GithubUser;