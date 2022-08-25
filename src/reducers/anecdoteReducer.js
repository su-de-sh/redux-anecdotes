const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);

const reducer = (state = initialState, action) => {
  //   console.log('state now: ', state)
  //   console.log('action', action)

  // console.dir(action.data)
  switch (action.type) {
    case "VOTE":
      return state.map((anec) => {
        if (anec.id === action.data.id)
          return { ...anec, votes: anec.votes + 1 };
        else return anec;
      });
    case "ADD":
      const newAnnecdote = asObject(action.data.content);
      // console.log(newAnnecdote);
      // console.log([...state, newAnnecdote]);
      return [...state, newAnnecdote];
    default:
      return state;
  }
};
export default reducer;
export function setVotes(id) {
  return { type: "VOTE", data: { id } };
}

export function setAnecdote(content) {
  return { type: "ADD", data: { content } };
}
