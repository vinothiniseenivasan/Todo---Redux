import { ADD_TODO , REMOVE_TODO ,EDIT_TODO } from "../constants/index";

//  payload => object
// action creators function
export const addTodo = (todo) =>
(
    {
        type : 'ADD_ITEM' ,
        payload : todo
    }
)

export const removeTodo =   (todoId) =>
(
    {
        type : EDIT_TODO ,
        payload : todoId
    }
)

export const editTodo = (todo) =>
(
    {
        type : EDIT_TODO , 
        payload : todo

    }
)

 




