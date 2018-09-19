import { createAction } from 'redux-actions';

export const INCREMENT = 'INCREMENT';

const incrementTodo = createAction(INCREMENT);

export default incrementTodo;
