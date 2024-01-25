import React, { useContext, useState } from "react";
import TodoContext from "../context/TodoContex";

const Todo = ({ name, id }) => {
  const { dispatch } = useContext(TodoContext);
  const [isEdit, setIsEdit] = useState(false);

  const deleteTodo = () => {
    dispatch({
      type: "deleteTodo",
      id,
    });
  };
  const handleChange = (e) => {
    dispatch({
      type: "editTodo",
      todo: { id: id, name: e.target.value },
    });
  };
  return (
    <div className="todo-list">
      {!isEdit ? (
        <p>{name}</p>
      ) : (
        <input type="text" value={name} onChange={handleChange} />
      )}

      <button onClick={() => setIsEdit(!isEdit)}>
        {!isEdit ? "edit" : "save"}
      </button>
      <button onClick={deleteTodo}>delete</button>
    </div>
  );
};

export default Todo;
