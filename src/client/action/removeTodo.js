import { createAction } from 'redux-actions';

export const REMOVE_TODO = 'REMOVE_TODO';

const removeTodo = createAction(REMOVE_TODO);

export default removeTodo;
