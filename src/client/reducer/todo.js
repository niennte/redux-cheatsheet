// Reducer composition pattern
// state refers to individual todo
const todo = (state = {}, action) => {
  switch (action.type) {
    case 'APP/TODO/ADD':
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      };
    case 'APP/TODO/TOGGLE':
      if (state.id !== action.payload.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed,
      });
    default:
      return state;
  }
};

export default todo;
