import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import allReducers from "./src/ducks";

// REDUCERS
export const reducer = allReducers;

// ACTIONS
export default createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
