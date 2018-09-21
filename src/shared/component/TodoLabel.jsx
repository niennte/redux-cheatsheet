// @flow
/* eslint-disable */

import React from 'react';

type Props = {
  onClick: Function,
  text: string,
};

const TodoLabel = (({ onClick, text }: Props) => (
  <span
    onClick={onClick}
  >
    { text }
  </span>
));

export default TodoLabel;
