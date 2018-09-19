// Reducer composition pattern
import todo from './todo';

// state refers to array of todos
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': // ES6 array array concat
      return [...state, todo(undefined, action)];
    case 'TOGGLE_TODO': // array.map returns a new array
      return state.map(t => todo(t, action));
    case 'REMOVE_TODO':
      return [];
    default:
      return state;
  }
};

export default todos;
