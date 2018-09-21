import todoCounter from './todoCounter';

test('should SET VISIBILITY FILTER', () => {
  expect(
    todoCounter(
      1,
      { type: 'APP/TODO/INCREMENT' },
    ),
  ).toBe(1 + 1);
});

test('should handle unknown', () => {
  expect(
    todoCounter(1, { type: 'UNKNOWN' }),
  ).toBe(1);
});

test('should handle undefined', () => {
  expect(
    todoCounter(undefined, {}),
  ).toBe(0);
});
