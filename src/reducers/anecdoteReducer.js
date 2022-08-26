import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdoteService";

// const anecdotesAtStart = [
//   "If it hurts, do it more often",
//   "Adding manpower to a late software project makes it later!",
//   "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//   "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//   "Premature optimization is the root of all evil.",
//   "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
// ];

// const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,

//     votes: 0,
//   };
// };

// const initialState = anecdotesAtStart.map(asObject);

// const reducer = (state = initialState, action) => {
//   //   console.log('state now: ', state)
//   //   console.log('action', action)

//   // console.dir(action.data)
//   switch (action.type) {
//     case "VOTE":
//       return state.map((anec) => {
//         if (anec.id === action.data.id)
//           return { ...anec, votes: anec.votes + 1 };
//         else return anec;
//       });
//     case "ADD":
//       const newAnnecdote = asObject(action.data.content);
//       // console.log(newAnnecdote);
//       // console.log([...state, newAnnecdote]);
//       return [...state, newAnnecdote];
//     default:
//       return state;
//   }
// };
// export default reducer;
// export function setVotes(id) {
//   return { type: "VOTE", data: { id } };
// }

// export function setAnecdote(content) {
//   return { type: "ADD", data: { content } };
// }

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    increaseVote(state, action) {
      const id = action.payload;
      return state.map((anec) => {
        if (anec.id === id) return { ...anec, votes: anec.votes + 1 };
        else return anec;
      });
    },
    addNewAnecdote(state, action) {
      const newAnnecdote = action.payload;
      return [...state, newAnnecdote];
    },

    setAnecdote(state, action) {
      return action.payload;
    },
  },
});

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdote(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnnecdote = await anecdoteService.createNew(content);
    dispatch(addNewAnecdote(newAnnecdote));
  };
};

export const increamentVote = (id) => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    // console.log("anecdotes", anecdotes);
    const anecdoteToUpdate = anecdotes.find((anecdote) => anecdote.id === id);
    // console.log("anecdoteToupdate", anecdoteToUpdate);
    const updatedAnecdote = await anecdoteService.updateVote(id, {
      ...anecdoteToUpdate,
      votes: anecdoteToUpdate.votes + 1,
    });
    dispatch(increaseVote(updatedAnecdote.id));
  };
};

export const { increaseVote, addNewAnecdote, setAnecdote } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
