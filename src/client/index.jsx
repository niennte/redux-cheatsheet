// @flow

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducer';
import App from './App';
import { APP_CONTAINER_SELECTOR } from '../shared/config';
import { isProd } from '../shared/util';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR);

const wrapApp = (AppComponent, reduxStore) => (
  <Provider store={reduxStore}>
    <AppContainer>
      <AppComponent />
    </AppContainer>
  </Provider>
);

ReactDOM.render(wrapApp(App, store), rootEl);

// Enable HMR
if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./App').default;
    ReactDOM.render(wrapApp(NextApp), rootEl);
  });
}
