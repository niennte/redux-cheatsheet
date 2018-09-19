// @flow

import React from 'react';

import Todo from './Todo';

type Props = {
  onTodoClick: Function,
  todos: Array<Object>,
};

const TodoList = (({ onTodoClick, todos }: Props) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    ))}
  </ul>
));

export default TodoList;
