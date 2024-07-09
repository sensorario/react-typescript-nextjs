import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
