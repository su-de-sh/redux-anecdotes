import axios from "axios";
const baseUrl = "http://localhost:3001/anecdotes";
const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};
const createNew = (content) => {
  const newAnecdote = { content, votes: 0 };
  return axios.post(baseUrl, newAnecdote).then((response) => response.data);
};
const anecdoteService = { getAll, createNew };

export default anecdoteService;
