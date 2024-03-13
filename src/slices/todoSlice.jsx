 import { createSlice } from "@reduxjs/toolkit";
// import { c } from "vite/dist/node/types.d-AKzkD8vd";



 const todoSlice = createSlice({
    name : 'todos' ,
    initialState : [] ,
    reducers : {
        // here  state => todos
        addTodo : ( todos ,action) =>  {
            todos.push({ id : action.payload.id ,
                         title : action.payload.title     })
        } ,
        removeTodo : ( todos ,action) =>
        {
          return   todos.filter((todo) => todo.id != action.payload)
        } ,
        editTodo:( todos ,action) =>
        {
             todos =  todos.map((todo) => 
            {
                if(todo.id === action.payload.id)
                {
                    todo.title = action.payload.title;
                }
                return todo;
            })
        }


    }
 })


 console.log("todoSlice" , todoSlice.reducer);
 console.log("todoSlice.actions" ,todoSlice.actions) 


 export default todoSlice;