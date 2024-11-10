import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice.js";

const rootReducer = combineReducers({
  user: userReducer,
});

export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
