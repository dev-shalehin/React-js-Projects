import { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";

export const Todositem = ({ todo }) => {
  const [isediting, setIsEditing] = useState(false);
  const { onChange, onDelete } = useContext(TodosContext);

  const todocontent = isediting ? (
    <>
      <input
        type="text"
        value={todo.title}
        onChange={(e) =>
          onChange({
            ...todo,
            title: e.target.value,
          })
        }
        className="bg-transparent border-b border-cyan-400 text-white outline-none px-1 w-full"
      />
      <button
        onClick={() => setIsEditing(false)}
        className="ml-3 text-green-400 text-sm"
      >
        Update
      </button>
    </>
  ) : (
    <>
      <span
        className={`text-white ${
          todo.status ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.title}
      </span>
      <button
        onClick={() => setIsEditing(true)}
        className="ml-3 text-cyan-400 text-sm"
      >
        Edit
      </button>
    </>
  );
  return (
    <div className="flex items-center gap-3 bg-[#0F1C4D] px-4 py-3 rounded-xl">
      <input
        type="checkbox"
        checked={todo.status}
        onChange={(e) =>
          onChange({
            ...todo,
            status: e.target.checked,
          })
        }
        className="w-4 h-4 accent-cyan-400"
      />

      <div className="flex-1 flex items-center">{todocontent}</div>

      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-400 hover:text-red-500 text-sm"
      >
        Delete
      </button>
    </div>
  );
};
