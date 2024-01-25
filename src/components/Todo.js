import React from "react";

const Todo = ({ name }) => {
  return (
    <div className="todo-list">
      <p>{name}</p>
      <button>Edit</button>
      <button>delete</button>
    </div>
  );
};

export default Todo;
