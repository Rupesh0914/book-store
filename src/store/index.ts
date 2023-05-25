import { combineReducers } from "redux";
import bookReducers from "./bookReducers";
import { configureStore } from '@reduxjs/toolkit';
const rootReducer = combineReducers({
	books: bookReducers
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
	reducer: rootReducer
  });

export default store;