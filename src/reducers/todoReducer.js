export default function todoReducer(state, action) {
  if (action.type === "addTodo") {
    return [...state, action.todo];
  } else if (action.type === "deleteTodo") {
    return state.filter((item) => item.id !== action.id);
  } else if (action.type === "editTodo") {
    return state?.map((item) => {
      if (item.id === action.todo.id) {
        return action.todo;
      } else {
        return item;
      }
    });
  }
}
