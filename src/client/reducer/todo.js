import { ADD_TODO } from '../action/addTodo';
import { TOGGLE_TODO } from '../action/toggleTodo';
import { REMOVE_TODO } from '../action/removeTodo';

// Reducer composition pattern
// state refers to individual todo
const todo = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      };
    case TOGGLE_TODO:
      if (state.id !== action.payload.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed,
      });
    case REMOVE_TODO:
      if (state.id !== action.payload.id) {
        return state;
      }
      return null;
    default:
      return state;
  }
};

export default todo;
