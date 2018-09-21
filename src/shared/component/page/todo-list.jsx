// @flow

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import AddTodo from '../../container/AddTodo';
import VisibleTodoList from '../../container/VisibleTodoList';
import Footer from '../Footer';

const title = 'World famous Todo List';

const TodoListPage = () => (
  <Fragment>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Idiomatic Redux Todo List.' },
        { property: 'og:title', content: title },
      ]}
    />
    <h2>{title}</h2>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Fragment>
);

export default TodoListPage;
