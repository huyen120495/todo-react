import {LOAD_TODO} from "./actions";

const todoApi = store => next => action => {
    if(action.type === LOAD_TODO) {
        fetch("./todos.json", {
            method: 'GET'
        }).then(function(response) {

            return response.json();

        }).then( data => next({
            type: LOAD_TODO,
            todos: data
        }));

    }
};

export default todoApi;