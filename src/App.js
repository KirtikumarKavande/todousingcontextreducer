import React, { useReducer } from "react";
import ShowTodo from "./components/ShowTodo";
import TodoContext from "./context/TodoContex.js";
import Todo from "./components/Todo.js";
import todoReducer from "./reducers/todoReducer.js";
import AddTodo from "./components/AddTodo.js";

const App = () => {
  const todoList = [
    {
      name: "kirtikumar",
      id: 1,
    },
    {
      name: "virat",
      id: 2,
    },
  ];
  const [allTodo, dispatch] = useReducer(todoReducer, todoList);
  return (
    <>
      <TodoContext.Provider value={{ allTodo, dispatch }}>
        <AddTodo />

        {allTodo.map((item) => (
          <Todo name={item.name} id={item.id} />
        ))}
      </TodoContext.Provider>
    </>
  );
};

export default App;
