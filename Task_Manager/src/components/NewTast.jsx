import React from "react";

const NewTast = () => {
  return (
    <div className="py-5">
      <form className="flex justify-between">
        <input className='w-3xl p-3 bg-gray-900 border border-gray-600 rounded-2xl' type="text" />
        <button type="submit" className="py-1 px-4 bg-gray-900 rounded-2xl cursor-pointer">
          New Task
        </button>
      </form>
    </div>
  );
};

export default NewTast;
