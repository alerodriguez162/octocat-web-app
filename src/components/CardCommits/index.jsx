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
    <li class="rounded-2xl bg-gray-800 px-8 py-10">
      <img
        class="mx-auto h-48 rounded-full md:h-56 "
        src="/images/commit.png"
        alt=""
      />
      <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
        {message}
      </h3>
      <p class="text-sm leading-6 text-gray-400">{sha}</p>
      <p class="text-sm leading-6 text-gray-400">Last update: {formatDate}</p>
      <ul role="list" class="mt-6 flex justify-center gap-x-6">
        <li>
          <button onClick={() => navigate(`${sha}`)} class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">Commit details</span>
            <img
              class="h-5 w-5"
              src="/images/sha.png"
            />
          </button>
        </li>
      </ul>
    </li>
  );
};

export default CardCommits;
