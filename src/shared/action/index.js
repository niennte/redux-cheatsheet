// @flow

import { createActions } from 'redux-actions';
import 'isomorphic-fetch';

import { helloEndpointRoute } from '../routes';
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
    CHAT: {
      CONNECT: undefined,
      USER: undefined,
      ADD_MESSAGE: undefined,
      INTELOCUTOR_TYPING: undefined,
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

export const emitMessage = (message: string) => () => {
  socket.emit('chat message', message);
  socket.emit('is typing', { status: false });
};

export const emitIsTyping = (status: boolean) => () => {
  socket.emit('is typing', { status });
};

export default actionCreators;
