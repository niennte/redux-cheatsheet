import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import actionCreators, { sayHelloAsync } from './index';

import { helloEndpointRoute } from '../../shared/routes';

const mockStore = configureMockStore([thunkMiddleware]);

afterEach(() => {
  fetchMock.restore();
});

test('sayHelloAsync success', () => {
  fetchMock.get(helloEndpointRoute(666), { serverMessage: 'Async hello success' });
  const store = mockStore();
  return store.dispatch(sayHelloAsync(666))
    .then(() => {
      expect(store.getActions()).toEqual([
        actionCreators.app.hello.async.request(),
        actionCreators.app.hello.async.success({ messageAsync: 'Async hello success' }),
      ]);
    });
});

test('sayHelloAsync 404', () => {
  fetchMock.get(helloEndpointRoute(666), 404);
  const store = mockStore();
  return store.dispatch(sayHelloAsync(666))
    .then(() => {
      expect(store.getActions()).toEqual([
        actionCreators.app.hello.async.request(),
        actionCreators.app.hello.async.failure(),
      ]);
    });
});

test('sayHelloAsync data error', () => {
  fetchMock.get(helloEndpointRoute(666), {});
  const store = mockStore();
  return store.dispatch(sayHelloAsync(666))
    .then(() => {
      expect(store.getActions()).toEqual([
        actionCreators.app.hello.async.request(),
        actionCreators.app.hello.async.failure(),
      ]);
    });
});
