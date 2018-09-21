import helloMessage from './helloMessage';

test('should SAY HELLO', () => {
  expect(
    helloMessage('', { type: 'APP/HELLO/SAY', payload: { message: 'Hello' } }),
  ).toBe('Hello');
});

test('should handle unknown', () => {
  expect(
    helloMessage('Message', { type: 'UNKNOWN' }),
  ).toBe('Message');
});

test('should handle undefined', () => {
  expect(
    helloMessage(undefined, {}),
  ).toBe('Initial reducer message');
});
