import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice.js";

export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
