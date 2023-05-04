import React, { useEffect } from "react";
import { getRepositories } from "../../api";
import CardRepo from "../../components/CardRepo";
import CardsLayout from "../../components/CardsLayout";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useRequest } from "../../hooks/useRequest";
const Repositories = () => {
  const { data, loading, error } = useRequest(getRepositories);

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useLocalStorage("user", "");

  useEffect(() => {
    if (data && data.repositories) setUser(data.repositories[0].owner);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <Container>
        <div class="mx-auto max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Repositories of {user}
          </h2>
          <p class="mt-4 text-lg leading-8 text-gray-400">
            Enjoy looking at your repositories
          </p>
        </div>
        {loading && <Loading>Loading</Loading>}
        {error && <p>{error.message}</p>}
        {!loading && !data && <p>The user has no repositories</p>}
        {data && (
          <CardsLayout>
            {data.repositories.map((repo) => {
              return <CardRepo key={repo.id} repo={repo} />;
            })}
          </CardsLayout>
        )}
      </Container>
    </>
  );
};

export default Repositories;
