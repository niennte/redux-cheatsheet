import visibilityFilter from './todoVisibilityFilter';

test('should SET VISIBILITY FILTER', () => {
  expect(
    visibilityFilter(
      'SHOW_ALL',
      {
        type: 'APP/TODO/SET_VISIBILITY_FILTER',
        payload: { filter: 'Hello' },
      },
    ),
  ).toBe('Hello');
});

test('should handle unknown', () => {
  expect(
    visibilityFilter('SHOW_ALL', { type: 'UNKNOWN' }),
  ).toBe('SHOW_ALL');
});

test('should handle undefined', () => {
  expect(
    visibilityFilter(undefined, {}),
  ).toBe('SHOW_ALL');
});
