import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice.js";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
}

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
