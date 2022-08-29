import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increamentVote } from "../reducers/anecdoteReducer";
import { updateNotification } from "../reducers/notificationReducer";

// import { setVotes } from "../reducers/anecdoteReducer";

export function AnnecdoteList() {
  const anecdotes = useSelector((state) => state.anecdotes);

  const filterChar = useSelector((state) => state.filters);

  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content.includes(filterChar)
  );

  const sortedAnecdotes = [...filteredAnecdotes].sort(
    (a, b) => b.votes - a.votes
  );

  const dispatch = useDispatch();

  const vote = (id) => {
    // console.log('vote', id)
    // dispatch({ type: "VOTE", data: { id } });
    dispatch(increamentVote(id));
    const anecdote = anecdotes.find((anecdote) => anecdote.id === id);

    dispatch(updateNotification(`voted '${anecdote.content}'`, 5));
  };

  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
}
