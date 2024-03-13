// 

import { useState } from "react";
import { useDispatch } from "react-redux";
import todoSlice from "../../slices/todoSlice";

function Todo({ title, id }) {
  const dispatch = useDispatch();
  const { editTodo, removeTodo } = todoSlice.actions;

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(title);

  const editTextTodo = () => {
    if (isEditing) {
      dispatch(editTodo({ id: id, title: editedText }));
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div>
      {isEditing ? (
        <input
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        title
      )}

      <button onClick={() => dispatch(removeTodo(id))}>
        Delete
      </button>

      <button onClick={editTextTodo}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
}

export default Todo;
