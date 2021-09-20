import { createStore, applyMiddleware } from "redux";
import { movieReducer } from "./reducer";
import thunk from "redux-thunk";
export const store = createStore(movieReducer, applyMiddleware(thunk));
