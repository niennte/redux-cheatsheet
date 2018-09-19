import { combineReducers } from 'redux';

import todoCounter from './todoCounter';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const reducers = combineReducers({
  todoCounter,
  todos,
  visibilityFilter,
});

export default reducers;
