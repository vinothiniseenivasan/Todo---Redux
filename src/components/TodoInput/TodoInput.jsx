import { useState } from "react";
import {  useSelector } from "react-redux";
// import {addTodo } from "../../actions/index";
import { useDispatch } from "react-redux";
import todoSlice  from "../../slices/todoSlice";



function TodoInput()
{
    const [  todoText ,setTodoText    ] =  useState('');
    const todoList = useSelector(  (state) => state.todos  );
    const dispatch =useDispatch();

    function insertedTodo()
    {
        // const length = (todoList.length === 0) ? 0 : todoList[todoList.length - 1].id ;
        const length = todoList.length === 0 ? 0 : todoList[todoList.length - 1].id + 1;
        console.log("length"  , length);
        dispatch(  todoSlice.actions.addTodo(   {   title : todoText ,id : length }   )   );
        setTodoText('');

    }

    return(
        <>
          <input 
          type="text" placeholder="Add Todo.."
          value={todoText}
          onChange={  (e) => setTodoText(e.target.value)  }
          />
          <button  onClick={insertedTodo}>  Add Todo   </button>
        </>
    )
    
    


}
export default TodoInput;