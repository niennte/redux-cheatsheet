import { combineReducers } from 'redux';

import todoCounter from './todoCounter';
import todos from './todos';
import visibilityFilter from './todoVisibilityFilter';
import helloMessage from './helloMessage';


const reducers = combineReducers({
  todoCounter,
  todos,
  visibilityFilter,
  helloMessage,
});

export default reducers;
