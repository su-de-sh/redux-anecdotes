import React from "react";
import { AnnecdoteList } from "./components/AnnecdoteList";
import { AnecdoteForm } from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import Filter from "./components/Filter";

const App = () => {
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
