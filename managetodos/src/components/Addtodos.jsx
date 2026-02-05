import React, { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";
const Addtodos = () => {
  const [title, setTitle] = useState("");
  const { addTodos } = useContext(TodosContext);
  return (
    <div className="flex items-center gap-3 bg-[#0B1535] p-4 rounded-xl">
      <input
        type="text"
        placeholder="Write your task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
      />
      <button
        onClick={() => {
          addTodos(title);
          setTitle("");
        }}
        className="w-10 h-10 rounded-full bg-indigo-500 text-white text-xl flex items-center justify-center hover:bg-indigo-600"
      >
        +
      </button>
    </div>
  );
};

export default Addtodos;
