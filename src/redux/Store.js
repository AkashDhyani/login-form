import { userReducer } from "./Reducers"; 
import { createStore } from "redux";

export const userStore = createStore(userReducer);