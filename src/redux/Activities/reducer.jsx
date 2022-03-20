const initialState = {
    todos: [{ id: 223, text: "Make Demo" }],
  };
  
  const reducer = function (state = initialState, action) {
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
        const currentTodos = state.todos.map((todo) =>
          todo.id === payload.id ? payload : todo
        );
  
        return {
          ...state,
          todos: currentTodos,
        };
      }
      case "REMOVED": {
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
  
  export default reducer;
  