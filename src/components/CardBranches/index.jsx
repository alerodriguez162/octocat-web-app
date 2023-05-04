import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./styles.css";

const CardBranches = ({ branch }) => {
  const navigate = useNavigate()
  const { name, commit } = branch;
  
  return (
    <li class="rounded-2xl bg-gray-800 px-8 py-10">
      <img
        class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
        src="/images/branch.png"
        alt=""
      />
      <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
        {name}
      </h3>
      <p class="text-sm leading-6 text-gray-400">{commit}</p>
      {/* <p class="text-sm leading-6 text-gray-400">Last update: {formatDate}</p> */}
      <ul role="list" class="mt-6 flex justify-center gap-x-6">
        <li>
          <button onClick={() => navigate(`${name}`)} class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">commits</span>
            <img
              class="h-5"
              src="/images/commit.png"
            />
          </button>
        </li>
      </ul>
    </li>
  );
};

export default CardBranches;
