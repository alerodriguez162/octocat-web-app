import Moment from "moment";
import React from "react";
import Divider from "../Divider";
import "./styles.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {commit.files.map((file, i) => {
            return (
              // <>
              //   <div key={file.sha} className="mb-3">
              //     <div className="inLine">
              //       <h4>SHA: {file.sha}</h4>
              //       <span>{file.status}</span>
              //     </div>
              //     <p>File Name: {file.filename}</p>
              //     <div className="inLine">
              //       <span>Modifications total: {file.changes}</span>
              //       <span>Additions: {file.additions}</span>
              //       <span>Deletions: {file.deletions}</span>
              //     </div>
              //   </div>
              //   <Divider />
              // </>
              <li key={file.sha}>
                <div className="relative pb-8">
                  {i !== commit.files.length - 1 ? (
                    <span
                      className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white">
                        <img
                          src="/images/logo.png"
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-500">
                          {file.filename}{" "}
                          <span
                            className="font-medium text-gray-900"
                          >
                            {file.sha}
                          </span>
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        <time dateTime={formatDate}>{formatDate}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CardCommitDetails;
