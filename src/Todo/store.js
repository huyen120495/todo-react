import {applyMiddleware, createStore} from "redux";
import reducer from "../reducer";
import todoApi from "./todoApi";

const store = createStore(reducer, applyMiddleware(todoApi));

export default store;