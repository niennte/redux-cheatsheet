// @flow

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from '../shared/reducer/index';

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState || {};

  return createStore(
    reducers,
    preloadedState,
    applyMiddleware(thunkMiddleware),
  );
};

export default initStore;
