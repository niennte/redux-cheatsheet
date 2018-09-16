import counter from './index';

test('should INCREMENT', () => {
  expect(
    counter(0, { type: 'INCREMENT' }),
  ).toBe(1);
});

test('should keep INCREMENTing', () => {
  expect(
    counter(1, { type: 'INCREMENT' }),
  ).toBe(2);
});

test('should DECREMENT', () => {
  expect(
    counter(2, { type: 'DECREMENT' }),
  ).toBe(1);
});

test('should keep DECREMENTing', () => {
  expect(
    counter(1, { type: 'DECREMENT' }),
  ).toBe(0);
});

test('should handle unknown', () => {
  expect(
    counter(1, { type: 'UNKNOWN' }),
  ).toBe(1);
});

test('should handle undefined', () => {
  expect(
    counter(undefined, {}),
  ).toBe(0);
});
