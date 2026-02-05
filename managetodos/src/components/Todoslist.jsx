import { useContext } from "react";
import { Todositem } from "./Todositem";
import { TodosContext } from "../context/TodosContext";

export const Todoslist = () => {
  const { todos } = useContext(TodosContext);
  return (
    <ul className="flex flex-col gap-3 mt-6">
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todositem todo={todo} />
        </li>
      ))}
    </ul>
  );
};
