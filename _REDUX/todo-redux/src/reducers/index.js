// 4. combineReducer (grouping reducers)

import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { combineReducers } from 'redux';

export default combineReducers({
    todos,
    visibilityFilter
})  
