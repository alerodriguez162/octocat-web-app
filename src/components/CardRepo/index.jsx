import Moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const CardRepo = ({ repo }) => {
  const navigate = useNavigate()
  const { name, description, updated_at } = repo;
  const formatDate = Moment(updated_at).format("MMMM Do YYYY, h:mm:ss a");
  return (
    <div className="column">
      <div className="card_repo">
        <h3>Last Update: {formatDate}</h3>
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="inLine">
          <button onClick={() => navigate(`${name}`)}>
            Branches
            <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-arrow-arrows-those-icons-lineal-color-those-icons.png" alt="See Details" />
          </button>
          <button onClick={() => navigate(`${name}/pulls`)}>
            Pull Requests
            <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-arrow-arrows-those-icons-lineal-color-those-icons.png" alt="See Details" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardRepo;
