import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { todos, filter } from './todos.js';
import { books } from './books';

const rootReducer = combineReducers({
  todos,
  filter,
  books,
  routing: routerReducer
});

export default rootReducer;
