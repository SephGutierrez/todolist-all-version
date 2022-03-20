import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import Reducers from "./reducers";

const initialState = {};
const middlewares = [thunk];
let devtools = (x) => x;

export const Store = createStore(
  Reducers,
  initialState,
  compose(applyMiddleware(...middlewares), devtools)
);
