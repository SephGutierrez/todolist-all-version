const initialState = {
    todos: [],
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'GET':
            return{
                ...state,
                todos: [...payload],
            };

        case 'POST':{
            const todos = [payload, ...state.todos];
            return{
                ...state,
                todos,
            };
        }

        case "PUT":
            const currentTodos = state.todos.map((todo) => 
            todo.id === payload.id ? payload : todo );
            return {
                ...state,
                todos: currentTodos,
            };

        case 'DELETE': {
            return{
                ...state, 
                todos: state.todos.filter((todo) => todo.id !== payload),
            };
        }
        default:
        return {...state};
    }
}

export default reducer;