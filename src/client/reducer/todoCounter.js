import { INCREMENT } from '../action/incrementTodo';

const todoCounter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};

export default todoCounter;
