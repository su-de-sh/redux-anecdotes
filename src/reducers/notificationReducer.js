import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notifications",
  initialState: null,
  reducers: {
    setNotification(state, action) {
      const message = action.payload;
      return message;
    },
    removeNotification() {
      // console.log("called");
      return null;
    },
  },
});

let timeoutID = null;
export const updateNotification = (message, timeout) => {
  return (dispatch) => {
    dispatch(setNotification(message));
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      dispatch(removeNotification());
    }, timeout * 1000);
  };
};

export const { setNotification, removeNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
