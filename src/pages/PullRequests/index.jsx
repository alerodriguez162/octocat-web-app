import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPullRequests } from "../../api";
import CardPulls from "../../components/CardPulls";
import CardsLayout from "../../components/CardsLayout";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useRequest } from "../../hooks/useRequest";

const PullRequests = () => {
  const navigate = useNavigate()
  let params = useParams();
  console.log(params)
  const { repositoryId } = params;
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useLocalStorage("user", "");
  const { data, loading, error, fetch } = useRequest(getPullRequests, `${user}/${repositoryId}`);

  return (
    <>
      <Container>
        <h1>Pull Request of {repositoryId}</h1>
        <div className="center mb-3">
          <button className="btn-default" onClick={() => navigate(`/${repositoryId}/createpr`)}>
            Open Pull Request
            <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-arrow-arrows-those-icons-lineal-color-those-icons.png" alt="See Details" />
          </button>
        </div>
        {loading && <Loading />}
        {error && <p>{error.message}</p>}
        {!loading && data.pulls && !data.pulls.length && <p>The repository has no pull requests</p>}
        {!loading && data && (
          <CardsLayout direction={"vertical"}>
            {data.pulls.map((pull) => {
              return <CardPulls key={pull.number} pull={pull} update={fetch} />;
            })}
          </CardsLayout>
        )}
      </Container>
    </>
  );
};

export default PullRequests;
