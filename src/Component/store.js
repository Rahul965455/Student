import { createStore } from "redux";
import studentReducer from "./Redux/Reducer";

const store = createStore(studentReducer);

export default store;
