// @flow

import React, { Fragment } from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

import { APP_NAME } from '../shared/config';

import Nav from './component/nav';
import HomePage from './component/page/home';
import HelloPage from './component/page/hello';
import HelloAsyncPage from './component/page/hello-async';
import TodoListPage from './component/page/todo-list';
import NotFoundPage from './component/page/not-found';
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  TODO_LIST_PAGE_ROUTE,
} from '../shared/routes';

const AppTodo = () => (
  <Fragment>

    <div>
      <h1>{APP_NAME}</h1>
      <Nav />
      <Switch>
        <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
        <Route path={HELLO_PAGE_ROUTE} render={() => <HelloPage />} />
        <Route path={HELLO_ASYNC_PAGE_ROUTE} render={() => <HelloAsyncPage />} />
        <Route path={TODO_LIST_PAGE_ROUTE} render={() => <TodoListPage />} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>

  </Fragment>
);

export default AppTodo;
