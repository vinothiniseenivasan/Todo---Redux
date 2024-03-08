import { ADD_TODO,EDIT_TODO,REMOVE_TODO } from "../constants/index";
  const intialTodos = [
    
      {  id : '1' ,title:'todo_1'} ,
      { id : '2' ,title:'todo_2'}
  ]

function todoReducer(todos = intialTodos  , action)
{
    if(action.type === ADD_TODO)
    {
        return [ ...todos , { id : action.payload.id ,
                              title : action.payload.title     }

        ]

    } 
    if(action.type === EDIT_TODO)
    {
        return todos.filter (eachTodo => eachTodo.id != action.payload);
        
    }
    if(action.type === REMOVE_TODO)
    {

        return todos.map((eachTodo) => 
        {
           if(eachTodo.id === action.payload.id)
           {
            eachTodo.title = action.payload.title
           }

           return eachTodo;
        }); 
        
    }

    return todos;
}
export default todoReducer;
