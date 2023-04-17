import { useParams } from "react-router-dom";
import { getCommitDetails } from "../../api";
import CardCommitDetails from "../../components/CardCommitDetails";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useRequest } from "../../hooks/useRequest";

const CommitDetails = () => {
  let params = useParams();
  const { repositoryId, branchId, commitId } = params;
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useLocalStorage("user", "");
  const { data, loading, error } = useRequest(getCommitDetails, { reponame: `${user}/${repositoryId}`, sha: commitId });
  return (
    <>
      <Container>
        <h1>Commit Details</h1>
        {loading && <Loading />}
        {error && <p>{error.message}</p>}
        {!loading && !data && <p>The branch has no commits</p>}
        {data && <CardCommitDetails commit={data.commit} />}
      </Container>
    </>
  );
};

export default CommitDetails;
