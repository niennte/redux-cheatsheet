import todo from './todo';
import { ADD_TODO } from '../action/addTodo';
import { TOGGLE_TODO } from '../action/toggleTodo';
import { REMOVE_TODO } from '../action/removeTodo';

// state refers to array of todos
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: // ES6 array array concat
      return [...state, todo(undefined, action)];
    case TOGGLE_TODO: // array.map returns a new array
      return state.map(t => todo(t, action));
    case REMOVE_TODO:
      return [];
    default:
      return state;
  }
};

export default todos;
