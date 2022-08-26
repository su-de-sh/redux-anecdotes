import { AnnecdoteList } from "./components/AnnecdoteList";
import { AnecdoteForm } from "./components/AnecdoteForm";
import Notification from "./components/Notification";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteForm />
      <AnnecdoteList />
    </div>
  );
};

export default App;
