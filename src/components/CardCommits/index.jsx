import Moment from "moment";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./styles.css";

const CardCommits = ({ branch }) => {
  let params = useParams();
  const navigate = useNavigate()
  const { sha, author, message, date } = branch;
  
  const { repositoryId, branchId } = params;
  const formatDate = Moment(date).format("MMMM Do YYYY, h:mm:ss a");

  return (
    <div className="card_commit">
      <div className="inLine mb-3">
        <span>{author}</span>
        <span>{formatDate}</span>
      </div>
      <h1>{message}</h1>
      <div className="inLine">
        <p>{sha}</p>
        <button onClick={() => navigate(`/${repositoryId}/${branchId}/${sha}`)}>
          Details
          <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-arrow-arrows-those-icons-lineal-color-those-icons.png" alt="See Details" />
        </button>
      </div>
    </div>
  );
};

export default CardCommits;
