export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const CLEAR_DONE = 'CLEAR_DONE';
export const LOAD_TODO = 'LOAD_TODO';

export function addTodo(todoName) {
    return {type: ADD_TODO, name: todoName}
}

export function updateTodo(todoId, todoDone) {
    return {type: UPDATE_TODO, todoId:todoId, done: todoDone}
}

export function clearDone() {
    return {type: CLEAR_DONE}
}

export function loadTodo() {
    return {type: LOAD_TODO}
}
