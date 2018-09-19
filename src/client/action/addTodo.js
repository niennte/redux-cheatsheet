import { createAction } from 'redux-actions';

export const ADD_TODO = 'ADD_TODO';

const addTodo = createAction(ADD_TODO);

export default addTodo;
