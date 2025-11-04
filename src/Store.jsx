/* eslint-disable react-refresh/only-export-components */
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";
import profileReducer from "./Slices/ProfileSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    profile:profileReducer
  }
});
