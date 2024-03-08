import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";

// Get Redux DevTools extension enhancer
const reduxDevToolEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


// Create Redux store with combined reducers and DevTools extension enhancer
const store = createStore(combineReducers(   {todos :todoReducer }   ) , {} ,reduxDevToolEnhancer);

export default store;
