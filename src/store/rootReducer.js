import { combineReducers } from 'redux';

import idReducer from './reducers/currentIdReducer.js';
import inputReducer from './reducers/inputReducer.js';
import styleReducer from './reducers/styleReducer.js';
import tasksReducer from './reducers/tasksReducer.js';

export default combineReducers({
    input: inputReducer,
    tasks: tasksReducer,
    id: idReducer,
    style: styleReducer,
})