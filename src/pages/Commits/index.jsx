import React from "react";
import { useParams } from "react-router-dom";
import { getCommits } from "../../api";
import CardCommits from "../../components/CardCommits";
import CardsLayout from "../../components/CardsLayout";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useRequest } from "../../hooks/useRequest";
const Commits = () => {
  let params = useParams();
  const { repositoryId, branchId } = params;
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useLocalStorage("user", "");
  const { data, loading, error } = useRequest(getCommits, { reponame: `${user}/${repositoryId}`, branch: branchId });
  return (
    <>
      <Container>
        <h1>Commits of {branchId}</h1>
        {loading && <Loading />}
        {error && <p>{error.message}</p>}
        {!loading && data.commits && !data.commits.length && <p>The branch has no commits</p>}
        {data && (
          <CardsLayout direction={"vertical"}>
            {data.commits.map((branch) => {
              return <CardCommits key={branch.sha} branch={branch} />;
            })}
          </CardsLayout>
        )}
      </Container>
    </>
  );
};

export default Commits;
