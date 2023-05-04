import Moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const CardRepo = ({ repo }) => {
  const navigate = useNavigate();
  const { name, description, updated_at } = repo;
  const formatDate = Moment(updated_at).format("MMMM Do YYYY, h:mm:ss a");
  return (
    <li class="rounded-2xl bg-gray-800 px-8 py-10">
      <img
        class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
        src="/images/logo.png"
        alt=""
      />
      <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
        {name}
      </h3>
      <p class="text-sm leading-6 text-gray-400">{description}</p>
      <p class="text-sm leading-6 text-gray-400">Last update: {formatDate}</p>
      <ul role="list" class="mt-6 flex justify-center gap-x-6">
        <li>
          <button onClick={() => navigate(`${name}`)} class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">branches</span>
            <img
              class="h-5 w-5"
              src="/images/branch.png"
            />
          </button>
        </li>
        <li>
          <button onClick={() => navigate(`${name}/pulls`)} class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">Pull Requests</span>
            <img
              class="h-5 w-5"
              src="/images/pr.png"
            />
          </button>
        </li>
      </ul>
    </li>
  );
};

export default CardRepo;
