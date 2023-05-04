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
  const [user] = useLocalStorage("user", "");
  const { data, loading, error } = useRequest(getBranches, `${user}/${repositoryId.repositoryId}`);
  return (
    <>
      <Container>
      <div class="mx-auto max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Branches of {repositoryId.repositoryId}
          </h2>
          <p class="mt-4 text-lg leading-8 text-gray-400">
            Enjoy looking at your branches
          </p>
        </div>
        {loading && <Loading />}
        {error && <p>{error.message}</p>}
        {!loading && data.branches && !data.branches.length && <p>The repository has no branches</p>}
        {data && (
          <CardsLayout>
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
