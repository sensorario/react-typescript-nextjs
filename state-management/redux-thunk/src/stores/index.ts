import { configureStore, combineReducers } from "@reduxjs/toolkit";
import SwapiReducer from "./Swapi/Swapi";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
  swapi: SwapiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
