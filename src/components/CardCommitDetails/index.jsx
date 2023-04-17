import Moment from "moment";
import React from "react";
import Divider from "../Divider";
import "./styles.css";

const CardCommitDetails = ({ commit }) => {
  const { sha, author, message, date, additions, deletions, total } = commit;
  const formatDate = Moment(date).format("MMMM Do YYYY, h:mm:ss a");

  return (
    <div className="card_commitDetails">
      <div className="inLine mb-3">
        <span>Author: {author}</span>
        <span>{formatDate}</span>
      </div>
      <h1>{message}</h1>
      <p className="mb-3">SHA: {sha}</p>
      <div className="inLine">
        <span>Modifications total: {total}</span>
        <span>Additions: {additions}</span>
        <span>Deletions: {deletions}</span>
      </div>

      <h2>Files modified</h2>
      {commit.files.map((file) => {
        return (
          <>
            <div key={file.sha} className="mb-3">
              <div className="inLine">
                <h4>SHA: {file.sha}</h4>
                <span>{file.status}</span>
              </div>
              <p>File Name: {file.filename}</p>
              <div className="inLine">
                <span>Modifications total: {file.changes}</span>
                <span>Additions: {file.additions}</span>
                <span>Deletions: {file.deletions}</span>
              </div>
            </div>
            <Divider />
          </>
        );
      })}
    </div>
  );
};

export default CardCommitDetails;
