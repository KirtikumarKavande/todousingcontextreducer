import React, { useContext, useState } from "react";
import TodoContext from "../context/TodoContex";

const AddTodo = () => {
  const [writeTodo, setWriteTodo] = useState("");
  const { allTodo, dispatch } = useContext(TodoContext);
  const addTodo = () => {
    dispatch({
      type: "addTodo",
      todo: { name: writeTodo, id: allTodo.length + 1 },
    });
  };
  return (
    <div style={{ display: "flex" }}>
      <input
        type="text"
        onChange={(e) => {
          setWriteTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
