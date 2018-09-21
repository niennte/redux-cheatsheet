import { combineReducers } from 'redux';

import todoCounter from './todoCounter';
import todos from './todos';
import visibilityFilter from './todoVisibilityFilter';
import helloMessage from './helloMessage';
import helloMessageAsync from './helloMessageAsync';


const reducers = combineReducers({
  todoCounter,
  todos,
  visibilityFilter,
  helloMessage,
  helloMessageAsync,
});

export default reducers;
