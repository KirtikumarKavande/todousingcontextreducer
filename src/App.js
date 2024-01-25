import React, { useReducer } from "react";
import ShowTodo from "./components/ShowTodo";
import TodoContext from "./context/TodoContex.js";
import Todo from "./components/Todo.js";
import todoReducer from "./reducers/todoReducer.js";

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
  const[state,dispatch]=useReducer(todoReducer,todoList)
  return (
      <TodoContext.Provider value={{state,dispatch}}>
      {
        todoList.map((item)=><Todo name={item.name} />)
      }
        
      </TodoContext.Provider>
  );
};

export default App;
