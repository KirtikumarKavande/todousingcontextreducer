import React, { useContext } from "react";
import TodoContext from "../context/TodoContex";

const Todo = ({ name, id }) => {
  const { dispatch } = useContext(TodoContext);

  const deleteTodo = () => {
    dispatch({
      type: "deleteTodo",
      id
    });
  };
  return (
    <div className="todo-list">
      <p>{name}</p>
      <button>Edit</button>
      <button onClick={deleteTodo}>delete</button>
    </div>
  );
};

export default Todo;
