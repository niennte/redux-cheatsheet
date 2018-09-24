// @flow

import React, { Fragment } from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import { APP_NAME } from './config';

import Nav from './component/nav';
import HomePage from './component/page/home';
import HelloPage from './component/page/hello';
import HelloAsyncPage from './component/page/hello-async';
import TodoListPage from './component/page/todo-list';
import NotFoundPage from './component/page/not-found';
import ChatPage from './component/page/chat';
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  TODO_LIST_PAGE_ROUTE,
  CHAT_PAGE_ROUTE,
} from './routes';

const App = () => (
  <Fragment>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Nav />
    <div>
      <h1>{APP_NAME}</h1>
      <Switch>
        <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
        <Route path={HELLO_PAGE_ROUTE} render={() => <HelloPage />} />
        <Route path={HELLO_ASYNC_PAGE_ROUTE} render={() => <HelloAsyncPage />} />
        <Route path={TODO_LIST_PAGE_ROUTE} render={() => <TodoListPage />} />
        <Route path={CHAT_PAGE_ROUTE} render={() => <ChatPage />} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>

  </Fragment>
);

export default App;
