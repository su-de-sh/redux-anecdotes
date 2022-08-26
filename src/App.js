import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AnnecdoteList } from "./components/AnnecdoteList";
import { AnecdoteForm } from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import Filter from "./components/Filter";
import anecdoteService from "./services/anecdoteService";
import { appendNewAnecdote } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    anecdoteService
      .getAll()
      .then((response) => dispatch(appendNewAnecdote(response)));
  }, [dispatch]);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteForm />
      <AnnecdoteList />
    </div>
  );
};

export default App;
