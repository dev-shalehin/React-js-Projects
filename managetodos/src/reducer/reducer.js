import genarteNextId from "../utill/genarteNextId";

export const todosReducer = (todos, action) => {
  if (action.type === "change") {
    return todos.map((todo) => {
      if (todo.id === action.updatedTodo.id) {
        return {
          ...todo,
          title: action.updatedTodo.title,
          status: action.updatedTodo.status,
        };
      }
      return todo;
    });
  } else if (action.type === "add") {
    return [
      ...todos,
      {
        id: genarteNextId(todos),
        title: action.title,
        status: false,
      },
    ];
  } else if (action.type === "delete") {
    return  todos.filter((todo) => todo.id !== action.id);
  }else {
    throw new Error("No Matching Action");
  }
};
