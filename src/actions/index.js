import { ADD_TODO,EDIT_TODO,REMOVE_TODO } from "../constants";

 

const addTodo = (todo) => ({
    type:ADD_TODO ,
    payload : todo
 });

 const removeTodo = (todoId) => ({
    type:REMOVE_TODO ,
    payload : todoId
 });


 const editTodo = (todo) => ({
    type:   EDIT_TODO ,
    payload : todo
 });

 export {addTodo ,removeTodo,editTodo};

  