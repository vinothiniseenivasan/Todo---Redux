  // for acceesing store
import { useSelector } from "react-redux";
import Todo from '../Todo/Todo'
import TodoInput from "../TodoInput/TodoInput";

function TodoList()
{


   
//    useSelector is used to acess spcific state
    const todoList = useSelector(  (state) =>   state.todos );



    return  (
        <>
           <TodoInput />
          { todoList &&  todoList.map( 
            (eachTodo)  =>  <Todo    title = {eachTodo.title}   id = {eachTodo.id}  />
           ) }
         </>
       
    )
 
}

export default TodoList;