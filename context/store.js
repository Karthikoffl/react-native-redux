import { createStore } from "redux";
import myReducers from "./reducers";

const store = createStore(myReducers);

export default store;
