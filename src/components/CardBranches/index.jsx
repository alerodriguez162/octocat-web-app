import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./styles.css";

const CardBranches = ({ branch }) => {
  let params = useParams();
  const navigate = useNavigate()
  const { name, commit } = branch;
  
  const repositoryId = params;
  return (
    <div className="card_branch">
      <h1>{name}</h1>
      <p>{commit}</p>
      <button onClick={() => navigate(`${repositoryId.repositoryId}/${name}`)}>
        Commits
        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-arrow-arrows-those-icons-lineal-color-those-icons.png" alt="See Details" />
      </button>
    </div>
  );
};

export default CardBranches;
