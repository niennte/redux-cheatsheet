import { combineReducers } from 'redux';

import todoCounter from './todoCounter';
import todos from './todos';
import visibilityFilter from './todoVisibilityFilter';
import helloMessage from './helloMessage';
import helloMessageAsync from './helloMessageAsync';
import chat from './chat';
import user from './user';
import interlocutor from './interlocutor';


const reducers = combineReducers({
  todoCounter,
  todos,
  visibilityFilter,
  helloMessage,
  helloMessageAsync,
  chat,
  user,
  interlocutor,
});

export default reducers;
