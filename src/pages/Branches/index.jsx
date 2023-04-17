import React from "react";
import { useParams } from "react-router-dom";
import { getBranches } from "../../api";
import CardBranches from "../../components/CardBranches";
import CardsLayout from "../../components/CardsLayout";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useRequest } from "../../hooks/useRequest";

const Branches = () => {
  let params = useParams();
  const repositoryId = params;
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useLocalStorage("user", "");
  const { data, loading, error } = useRequest(getBranches, `${user}/${repositoryId.repositoryId}`);
  return (
    <>
      <Container>
        <h1>Branches of {repositoryId.repositoryId}</h1>
        {loading && <Loading />}
        {error && <p>{error.message}</p>}
        {!loading && data.branches && !data.branches.length && <p>The repository has no branches</p>}
        {data && (
          <CardsLayout direction={"vertical"}>
            {data.branches.map((branch) => {
              return <CardBranches key={branch.commit} branch={branch} />;
            })}
          </CardsLayout>
        )}
      </Container>
    </>
  );
};

export default Branches;
