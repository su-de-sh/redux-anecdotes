import { AnecdoteForm } from "./components/AnecdoteForm";
import { useSelector, useDispatch } from "react-redux";
import { setVotes, setAnecdote } from "./reducers/anecdoteReducer";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);

  const dispatch = useDispatch();

  const vote = (id) => {
    // console.log('vote', id)
    // dispatch({ type: "VOTE", data: { id } });
    dispatch(setVotes(id));
  };

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    dispatch(setAnecdote(content));
    event.target.anecdote.value = "";
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <AnecdoteForm addAnecdote={addAnecdote} />
    </div>
  );
};

export default App;
