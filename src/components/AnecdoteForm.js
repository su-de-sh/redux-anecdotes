import React from "react";
import { useDispatch } from "react-redux";
import { addNewAnecdote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  removeNotification,
} from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdoteService";

export function AnecdoteForm() {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;

    const newAnecdote = await anecdoteService.createNew(content);

    dispatch(addNewAnecdote(newAnecdote));
    dispatch(setNotification(`added '${content}'`));
    setTimeout(() => dispatch(removeNotification()), 5000);
    event.target.anecdote.value = "";
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
}
