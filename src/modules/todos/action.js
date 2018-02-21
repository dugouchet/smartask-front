// import { TYPES } from './constants';
// import {CALL_API} from 'redux-api-middleware';
let nextTodoId = 0;

export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    };
};

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
};

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};


// export const getFruits = () => (dispatch)  => {
//     dispatch({
//         [CALL_API]: {
//             endpoint: 'http://localhost:8080/fruits',
//             method: 'GET',
//             types: [TYPES.FETCH_FRUITS_LIST_REQUEST, TYPES.FETCH_FRUITS_LIST_SUCCESS, TYPES.FETCH_FRUITS_LIST_FAILURE]
//         }
//     });
// };
