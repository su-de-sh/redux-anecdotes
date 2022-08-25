import { AnnecdoteList } from "./components/AnnecdoteList";
import { AnecdoteForm } from "./components/AnecdoteForm";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteForm />
      <AnnecdoteList />
    </div>
  );
};

export default App;
