/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
// import { useDispatch } from "react-redux";
import { addNewAnecdote } from "../reducers/anecdoteReducer";
import { updateNotification } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdoteService";

const AnecdoteForm = (props) => {
  // const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;

    const newAnecdote = await anecdoteService.createNew(content);

    // dispatch(addNewAnecdote(newAnecdote));
    props.addNewAnecdote(newAnecdote);
    // dispatch(setNotification(`added '${content}'`));
    // dispatch(updateNotification(`added '${content}'`, 5));
    props.updateNotification(`added '${content}'`, 5);
    // setTimeout(() => dispatch(removeNotification()), 5000);
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
};

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
  };
};

const mapDispatchToProps = {
  addNewAnecdote,
  updateNotification,
};

const ConnectedAnnecdote = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm);

export default ConnectedAnnecdote;
