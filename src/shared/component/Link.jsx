// @flow

import React from 'react';

type Props = {
  active: boolean,
  children: any,
  onClick: Function,
};

const Link = ({ active, children, onClick }: Props) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Link;
