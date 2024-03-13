// import { createStore, combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./reducers/todoReducer";
import todoSlice from "./slices/todoSlice";

// Get Redux DevTools extension enhancer
// const reduxDevToolEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


// Create Redux  store with combined reducers and DevTools extension enhancer
// const store = createStore(combineReducers({todos :todoReducer}) , {} ,reduxDevToolEnhancer);

const store = configureStore(   {
    reducer :{
         todos :todoSlice.reducer 
    } ,
    devTools:true
}) 

export default store;
