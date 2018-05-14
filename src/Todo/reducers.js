import {ADD_TODO, CLEAR_DONE, LOAD_TODO, UPDATE_TODO} from "./actions";

export function addTodoReducer(state = [], action) {
    if(action.type === ADD_TODO) {
        return [...state, {name: action.name, done: false}]
    }

    if(action.type === UPDATE_TODO) {
        let newTodos = [...state];
        newTodos[action.todoId].done = action.done;
        return [...newTodos]
    }

    if(action.type === CLEAR_DONE) {
        return state.filter(todo => !todo.done);
    }

    if(action.type === LOAD_TODO) {
        return [...action.todos]
    }

    return state;
}