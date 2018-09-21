import { createStore } from 'redux';

import reducers from './index';
import todoCounter from './todoCounter';
import todos from './todos';
import visibilityFilter from './todoVisibilityFilter';
import helloMessage from './helloMessage';
import helloMessageAsync from './helloMessageAsync';

const store = createStore(reducers);

// check that initial state of the root reducer matches
// what child reducers return given an empty action
test('match initial state', () => {
  expect(store.getState().todoCounter).toEqual(todoCounter(undefined, {}));
  expect(store.getState().todos).toEqual(todos(undefined, {}));
  expect(store.getState().visibilityFilter).toEqual(visibilityFilter(undefined, {}));
  expect(store.getState().helloMessage).toEqual(helloMessage(undefined, {}));
  expect(store.getState().helloMessageAsync).toEqual(helloMessageAsync(undefined, {}));
});

// now you can do a similar “smoke test” to check
// that child reducers handle an action
test('delegate an action', () => {
  const action = { type: 'TEST' };
  store.dispatch(action);
  expect(store.getState().todoCounter).toEqual(todoCounter(undefined, action));
  expect(store.getState().todos).toEqual(todos(undefined, action));
  expect(store.getState().visibilityFilter).toEqual(visibilityFilter(undefined, action));
  expect(store.getState().helloMessage).toEqual(helloMessage(undefined, action));
  expect(store.getState().helloMessageAsync).toEqual(helloMessageAsync(undefined, action));
});
