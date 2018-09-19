// @flow

import React from 'react';

type Props = {
  onClick: Function,
};

const TodoRemoveButton = (({ onClick }: Props) => (
  <button
    type="button"
    onClick={onClick}
  >
    x
  </button>
));

export default TodoRemoveButton;
