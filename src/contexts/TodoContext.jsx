import React, { createContext, useReducer } from "react";
const initialState = {
  todos: [{ id: 223, text: "Make Demo" }],
};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD": {
      const todos = [payload, ...state.todos];
      return {
        ...state,
        todos,
      };
    }
    case "UPDATE": {
      const currentTodos = state.todos.map((todo) =>todo.id === payload.id ? payload : todo
      );
      return {
        ...state,
        todos: currentTodos,
      };
    }
    case "Removed": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    }
    default: {
      return { ...state };
    }
  }
};
const TodoContext = createContext({
  ...initialState,
  add: () => Promise.Array(),
  update: () => Promise.Array(),
  removed: () => Promise.resolve(),
});
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const add = (todo) => {
    dispatch({
      type: "ADD",
      payload: todo,
    });
  };
  const update = (todo) => {
    dispatch({
      type: "UPDATE",
      payload: todo,
    });
  };
  const removed = (id) => {
    dispatch({
      type: "Removed",
      payload: id,
    });
  };
  return (
    <TodoContext.Provider
      value={{
        ...state,
        add,
        update,
        removed,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContext;


