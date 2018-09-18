/* eslint-disable global-require */
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';
import { APP_CONTAINER_SELECTOR } from '../shared/config';

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR);

const wrapApp = AppComponent => (
  <AppContainer>
    <AppComponent />
  </AppContainer>
);

ReactDOM.render(wrapApp(App), rootEl);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(wrapApp(NextApp), rootEl);
  });
}
