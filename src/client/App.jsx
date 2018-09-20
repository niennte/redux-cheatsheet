// @flow

import React, { Fragment } from 'react';

import AddTodo from './container/AddTodo';
import VisibleTodoList from './container/VisibleTodoList';
import Footer from './component/Footer';

import HelloButton from './container/hello/HelloButton';
import Message from './container/hello/Message';

import HelloButtonAsync from './container/hello/HelloButtonAsync';
import MessageAsync from './container/hello/MessageAsync';

import { APP_NAME } from '../shared/config';

const AppTodo = () => (
  <Fragment>

    <div>
      <h1>{APP_NAME}</h1>
      <Message />
      <HelloButton />
      <MessageAsync />
      <HelloButtonAsync />
    </div>

    <hr />

    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>

  </Fragment>
);

export default AppTodo;
