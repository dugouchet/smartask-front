import { combineReducers } from 'redux';
import todos from './todos/reducer';
import visibilityFilter from './visibilityFilter/reducer';


const todoApp = combineReducers({
    todos,
    visibilityFilter
});

export default todoApp;
