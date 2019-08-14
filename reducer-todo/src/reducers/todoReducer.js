

export const intitialState = {
    todos: [
        {
            item: "learn about reducers",
            completed: false,
            id: 123981239
        },
        {
            item: "practice your freaking javascript",
            completed: false,
            id: new Date ()
        },
        {
            item: "rewatch today's lecture",
            completed: false,
            id: new Date () + 1
        },
    ]
};

export const todoReducer = (state, action) => {
    switch(action.type){
        case "ADD_TODO":
            return {
                ...state,
                todos: state.todos.concat({
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                })
            };
        case "TOGGLE_COMPLETED":
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id=== action.payload ? {...todo, completed: !todo.completed}: todo)
            };
        case "CLEAR_COMPLETED":
            return {
                ...state,
                todos: state.todos.filter(({completed})=> !completed)
            }
        case "INPUT_ITEM":
            return{
                ...state,
                item: action.payload,
            }
        default:
            return state;
    }
}