import { createAction } from 'redux-actions';

export const REMOVE_TODO = 'ADD_TODO';

const removeTodo = createAction(REMOVE_TODO);

export default removeTodo;
