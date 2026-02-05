import { createContext, useReducer } from "react";
import demotodos from "../data";
import { todosReducer } from "../reducer/reducer";

export const TodosContext = createContext(null);

export default function TodosContextProvider({ children }) {
  const [todos, dispatch] = useReducer(todosReducer, demotodos);

  const handleChangeTodo = (updatedTodo) => {
    dispatch({
      type: "change",
      updatedTodo,
    });
  };
  const handleDeleteTodo = (id) => {
    dispatch({
      type: "delete",
      id,
    });
  };

  const handleAddTodo = (title) => {
    dispatch({
      type: "add",
      title,
    });
  };

  return(
    <TodosContext
    value={{
      todos,
      onChange: handleChangeTodo,
      onDelete: handleDeleteTodo,
      addTodos: handleAddTodo,
    }}
  >
    {children}
  </TodosContext>
  )
}
