import { ADD_TODO,EDIT_TODO,REMOVE_TODO } from "../constants/index";


function todoReducer(todos = [] , action)
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
}
