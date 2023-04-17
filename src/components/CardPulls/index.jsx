import Moment from "moment";
import React from "react";
import { useParams } from "react-router-dom";
// import { useSnackbar } from "react-simple-snackbar";
import { closePull } from "../../api";
import "./styles.css";

const snackbarWarning = {
  position: "bottom-center",
  style: {
    backgroundColor: "red",
    color: "white",
    fontSize: "20px",
    textAlign: "center",
  },
};

const snackbarSuccess = {
  position: "bottom-center",
  style: {
    backgroundColor: "green",
    color: "white",
    fontSize: "20px",
    textAlign: "center",
  },
};

const CardPulls = ({ pull, update }) => {
  let params = useParams();
  // const [openSnackbarWarning] = useSnackbar(snackbarWarning);
  // const [openSnackbarSuccess] = useSnackbar(snackbarSuccess);

  
  const { repositoryId } = params;
  const { title, description, state, number, author, date } = pull;
  const formatDate = Moment(date).format("MMMM Do YYYY, h:mm:ss a");

  const closePR = async () => {
    try {
      const res = await closePull(`${author}/${repositoryId}`, number);
      if (res.status) {
        // openSnackbarSuccess("Pull request closed correctly");
        update();
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      // openSnackbarWarning(error.message);
    }
  };

  return (
    <div className="card_pulls">
      <div className="inLine mb-3">
        <span>Author: {author}</span>
        <span>Last modification: {formatDate}</span>
      </div>
      <h1>
        [{state}] {title}
      </h1>
      <p>{description}</p>

      {state === "open" && <button onClick={closePR}>Close PR</button>}
    </div>
  );
};

export default CardPulls;
