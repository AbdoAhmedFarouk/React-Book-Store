import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogged: false, name: "Abdelrahman Ahmed" };
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleCounter: (state) => {
      state.isLogged = !state.isLogged;
    },
  },
});

export default authSlice.reducer;
export const { toggleCounter } = authSlice.actions;
