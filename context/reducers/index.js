import counterReducer from "./counterReducer";
import userReducer from "./userReducer";

import { combineReducers } from "redux";

const myReducers = combineReducers({
  user: userReducer,
  counter: counterReducer,
});

export default myReducers;
