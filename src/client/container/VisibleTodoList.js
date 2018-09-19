import { connect } from 'react-redux';

import TodoList from '../component/TodoList';
import toggleTodo from '../action/toggleTodo';
import removeTodo from '../action/removeTodo';

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';

const getVisibleTodos = (
  todos,
  filter,
) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};


// maps Redux store state to components
const mapStateToTodoListProps = state => ({
  todos: getVisibleTodos(
    state.todos,
    state.visibilityFilter,
  ),
});

// maps Redux store dispatch to list of components
const mapDispatchToTodoListProps = dispatch => ({
  onTodoToggle: (id) => {
    dispatch(toggleTodo({ id }));
  },
  onTodoRemove: (id) => {
    dispatch(removeTodo({ id }));
  },
});

const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps,
)(TodoList);

export default VisibleTodoList;
