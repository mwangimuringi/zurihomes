import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice.js";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  user: userReducer,
});

const persitedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
