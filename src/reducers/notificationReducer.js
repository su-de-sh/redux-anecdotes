import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notifications",
  initialState: null,
  reducers: {
    setNotification(state, action) {
      const message = action.payload;
      return message;
    },
    removeNotification(state, action) {
      return null;
    },
  },
});

export const { setNotification, removeNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
