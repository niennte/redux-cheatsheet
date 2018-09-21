import { connect } from 'react-redux';

import TodoList from '../component/TodoList';
import actionCreators from '../action/index';

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

const mapStateToTodoListProps = state => ({
  todos: getVisibleTodos(
    state.todos,
    state.visibilityFilter,
  ),
});

const mapDispatchToTodoListProps = dispatch => ({
  onTodoToggle: (id) => {
    dispatch(actionCreators.app.todo.toggle({ id }));
  },
  onTodoRemove: (id) => {
    dispatch(actionCreators.app.todo.remove({ id }));
  },
});

const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps,
)(TodoList);

export default VisibleTodoList;
