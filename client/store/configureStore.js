import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import logger from "redux-logger";
import rootReducer from "../reducer/rootReducer";

const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV === 'development',
  });

  return store;
};

const wrapper = createWrapper(makeStore);

export default wrapper;
