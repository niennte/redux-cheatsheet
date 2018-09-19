// @flow

import React from 'react';

import TodoLabel from './TodoLabel';
import TodoRemoveButton from './TodoRemoveButton';

type Props = {
  onToggle: Function,
  onRemove: Function,
  completed: boolean,
  text: string,
};

const styleCompleted = (applies: boolean) => ({
  textDecoration: applies
    ? 'line-through'
    : 'none',
});

const Todo = (({
  onToggle, onRemove, completed, text,
}: Props) => (
  <li style={styleCompleted(completed)}>
    <TodoLabel onClick={onToggle} text={text} />
    <TodoRemoveButton onClick={onRemove} />
  </li>
));

export default Todo;
