// @flow

import React from 'react';

type Props = {
  onToggle: Function,
  onRemove: Function,
  completed: boolean,
  text: string,
};

const Todo = (({
  onToggle, onRemove, completed, text,
}: Props) => (
  <li
    style={{
      textDecoration:
            completed
              ? 'line-through'
              : 'none',
    }}
  >
    {/* eslint-disable-next-line */}
    <span onClick={onToggle}>
      { text }
    </span>
    <button
      type="button"
      onClick={onRemove}
    >
      x
    </button>
  </li>
));

export default Todo;
