/* eslint-disable react-refresh/only-export-components */
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  }
});
