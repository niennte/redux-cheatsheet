// @flow

import React from 'react';

import HelloAsyncButton from '../../container/hello/HelloButtonAsync';
import MessageAsync from '../../container/hello/MessageAsync';

const HelloAsyncPage = () => (
  <div>
    <MessageAsync />
    <HelloAsyncButton />
  </div>
);

export default HelloAsyncPage;
