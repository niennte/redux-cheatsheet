import helloMessageAsync from './helloMessageAsync';

test('should ASYNC REQUEST', () => {
  expect(
    helloMessageAsync({}, {
      type: 'APP/HELLO/ASYNC/REQUEST',
    }),
  ).toEqual('Loading...');
});

test('should ASYNC SUCCESS', () => {
  expect(
    helloMessageAsync({}, {
      type: 'APP/HELLO/ASYNC/SUCCESS',
      payload: {
        messageAsync: 'Yay!',
      },
    }),
  ).toEqual('Yay!');
});

test('should ASYNC FAILURE', () => {
  expect(
    helloMessageAsync({}, {
      type: 'APP/HELLO/ASYNC/FAILURE',
    }),
  ).toEqual('No message received, please check your connection');
});

test('should handle unknown', () => {
  expect(
    helloMessageAsync({ test: 'test' }, { type: 'UNKNOWN' }),
  ).toEqual({ test: 'test' });
});

test('should handle undefined', () => {
  expect(
    helloMessageAsync(undefined, {}),
  ).toEqual('Initial reducer message for async call');
});
