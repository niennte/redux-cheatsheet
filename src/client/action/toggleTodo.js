import { createAction } from 'redux-actions';

export const TOGGLE_TODO = 'TOGGLE_TODO';

const toggleTodo = createAction(TOGGLE_TODO);

export default toggleTodo;
