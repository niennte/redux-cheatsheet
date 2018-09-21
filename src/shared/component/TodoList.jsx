// @flow

import React from 'react';

import Todo from './Todo';

type Props = {
  onTodoToggle: Function,
  onTodoRemove: Function,
  todos: Array<Object>,
};

const TodoList = (({ onTodoToggle, onTodoRemove, todos }: Props) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onToggle={() => onTodoToggle(todo.id)}
        onRemove={() => onTodoRemove(todo.id)}
      />
    ))}
  </ul>
));

export default TodoList;
