import axios from "axios";
const baseUrl = "http://localhost:3001/anecdotes";
const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};
const createNew = (content) => {
  const newAnecdote = { content, votes: 0 };
  return axios.post(baseUrl, newAnecdote).then((response) => response.data);
};
const updateVote = (id, anecdoteToUpdate) => {
  return axios.put(`${baseUrl}/${id}`, anecdoteToUpdate).then((response) => {
    // console.log("response by axios", response);
    return response.data;
  });
};

const anecdoteService = { getAll, createNew, updateVote };

export default anecdoteService;
