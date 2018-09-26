// @flow

import { createActions } from 'redux-actions';
import 'isomorphic-fetch';

import { helloEndpointRoute } from '../routes';
import { loginEndpointRoute } from '../routes';
import { socket } from '../../client/socket';

const actionCreators = createActions({
  APP: {
    TODO: {
      // given undefined, the identity function will be used
      INCREMENT: undefined,
      ADD: undefined,
      TOGGLE: undefined,
      REMOVE: undefined,
      SET_VISIBILITY_FILTER: undefined,
    },
    HELLO: {
      SAY: undefined,
      ASYNC: {
        REQUEST: undefined,
        SUCCESS: undefined,
        FAILURE: undefined,
      },
    },
    ASYNC: {
      REQUEST: undefined,
      SUCCESS: undefined,
    },
    CHAT: {
      CONNECT: undefined,
      USER: undefined,
      ADD_MESSAGE: undefined,
      INTELOCUTOR_TYPING: undefined,
    },
    USER: {
      LOGIN: {
        SUCCESS: undefined,
      },
    },
  },
});

export const sayHelloAsync = (num: number) => (dispatch: Function) => {
  dispatch(actionCreators.app.hello.async.request());
  return fetch(helloEndpointRoute(num), { method: 'GET' })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then((data) => {
      if (!data.serverMessage) throw Error('No message received');
      dispatch(actionCreators.app.hello.async.success({ messageAsync: data.serverMessage }));
    })
    .catch(() => {
      dispatch(actionCreators.app.hello.async.failure());
    });
};

export const loginUser = (userName: string) => (dispatch: Function) => {
  dispatch(actionCreators.app.hello.async.request());
  return fetch(loginEndpointRoute(userName), { method: 'POST' })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then((data) => {
      if (!data.login) throw Error('No message received');
      dispatch(actionCreators.app.user.login.success(data.login));
    })
    .catch(() => {
      dispatch(actionCreators.app.hello.async.failure());
    });
};

export const emitMessage = (message: Object, userName: string) => () => {
  socket.emit('chat message', message);
  socket.emit('is typing', { status: false, userName });
};

export const emitIsTyping = (isTyping: Object) => () => {
  socket.emit('is typing', isTyping);
};

export default actionCreators;
