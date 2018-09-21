const todoCounter = (state = 0, action) => {
  switch (action.type) {
    case 'APP/TODO/INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

export default todoCounter;
