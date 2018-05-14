import {handleActions, combineActions} from 'redux-actions';

const reducer = handleActions(
    {
        [combineActions(addTodo)](
            state,
            {
                payload: { amount }
            }
        ) {
            return { ...state, counter: state.counter + amount };
        }
    },
    defaultState
);