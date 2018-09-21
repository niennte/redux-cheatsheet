import DeepFreeze from 'deep-freeze';
import todos from './todos';

const items = DeepFreeze([
  {
    id: 1,
    text: 'test1',
    completed: false,
  },
  {
    id: 2,
    text: 'test2',
    completed: false,
  },
  {
    id: 3,
    text: 'test3',
    completed: false,
  },
]);

const item = DeepFreeze({
  id: 9,
  text: 'test9',
  completed: false,
});

test('should ADD', () => {
  expect(
    todos(items, {
      type: 'APP/TODO/ADD',
      payload: {
        id: item.id,
        text: item.text,
      },
    })[items.length],
  ).toEqual(item);
});

test('should TOGGLE', () => {
  expect(
    todos(items, {
      type: 'APP/TODO/TOGGLE',
      payload: {
        id: items[0].id,
      },
    })[0].completed,
  ).toEqual(!items[0].completed);
});


test('should TOGGLE correct id', () => {
  expect(
    todos(items, {
      type: 'APP/TODO/TOGGLE',
      payload: {
        id: items[0].id,
      },
    })[1].completed,
  ).toEqual(items[1].completed);
});

test('should REMOVE', () => {
  expect(
    todos(items, {
      type: 'APP/TODO/REMOVE',
      payload: {
        id: items[0].id,
      },
    }).length,
  ).toBe(items.length - 1);
});

test('should REMOVE correct id', () => {
  expect(
    todos(items, {
      type: 'APP/TODO/REMOVE',
      payload: {
        id: items[0].id,
      },
    })
      .filter(t => (t.id === items[0].id))
      .length,
  ).toBe(0);
});


test('should handle unknown', () => {
  expect(
    todos(items, { type: 'UNKNOWN' }),
  ).toEqual(items);
});

test('should handle undefined', () => {
  expect(
    todos(undefined, {}),
  ).toEqual([]);
});
