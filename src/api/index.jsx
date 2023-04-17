import axios from "axios";

const GitHubClient = axios.create({
  baseURL: "http://localhost:3005",
});

const getRepositories = async () => {
  const res = await GitHubClient.get(`/repositories`);
  return res.data;
};

const getCommits = async ({ branch, reponame }) => {
  const res = await GitHubClient.get(`/commits/${branch}`, {
    headers: {
      reponame: reponame,
    },
  });
  return res.data;
};

const getCommitDetails = async ({ sha, reponame }) => {
  const res = await GitHubClient.get(`/commits/single/${sha}`, {
    headers: {
      reponame: reponame,
    },
  });
  return res.data;
};

const getBranches = async (reponame) => {
  const res = await GitHubClient.get(`/branches`, {
    headers: {
      reponame: reponame,
    },
  });
  return res.data;
};

const getPullRequests = async (reponame) => {
  const res = await GitHubClient.get(`/pulls`, {
    headers: {
      reponame: reponame,
    },
  });
  return res.data;
};


const closePull = async (reponame, pullId) => {
  const res = await GitHubClient.post(`/pulls/close/${pullId}`, null, {
    headers: {
      reponame: reponame,
    },
  });
  return res.data;
};

const compareBranches = async (reponame, body) => {
  const res = await GitHubClient.post(`/pulls/compare`, body, {
    headers: {
      reponame: reponame,
    },
  });
  return res.data;
};

const createPR = async (reponame, body) => {
  const res = await GitHubClient.post(`/pulls/create`, body, {
    headers: {
      reponame: reponame,
    },
  });
  return res.data;
};

const mergeBranches = async (reponame, body) => {
  const res = await GitHubClient.post(`/pulls/merge`, body, {
    headers: {
      reponame: reponame,
    },
  });
  return res.data;
};

export { getCommits, getCommitDetails, getBranches, getRepositories, getPullRequests, closePull, compareBranches, createPR, mergeBranches };

