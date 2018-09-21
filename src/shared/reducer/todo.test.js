import DeepFreeze from 'deep-freeze';
import todo from './todo';

const item = DeepFreeze({
  id: 1,
  text: 'test1',
  completed: false,
});

test('should ADD', () => {
  expect(
    todo(DeepFreeze({}), {
      type: 'APP/TODO/ADD',
      payload: {
        id: 1,
        text: 'some text',
      },
    }),
  ).toEqual({
    id: 1,
    text: 'some text',
    completed: false,
  });
});

test('should TOGGLE', () => {
  expect(
    todo(item, {
      type: 'APP/TODO/TOGGLE',
      payload: {
        id: item.id,
      },
    }).completed,
  ).toEqual(!item.completed);
});


test('should TOGGLE correct id', () => {
  expect(
    todo(item, {
      type: 'APP/TODO/TOGGLE',
      payload: {
        id: item + 1,
      },
    }).completed,
  ).toEqual(item.completed);
});

test('should handle unknown', () => {
  expect(
    todo(item, { type: 'UNKNOWN' }),
  ).toEqual(item);
});

test('should handle undefined', () => {
  expect(
    todo(undefined, {}),
  ).toEqual({});
});
