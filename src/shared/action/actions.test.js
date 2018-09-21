import actionCreators from './index';

test('actionCreators.app.todo.increment', () => {
  expect(actionCreators.app.todo.increment()).toEqual({
    type: 'APP/TODO/INCREMENT',
  });
});

test('actionCreators.app.todo.add', () => {
  expect(actionCreators.app.todo.add({ id: 1, text: 'text' })).toEqual({
    type: 'APP/TODO/ADD',
    payload: { id: 1, text: 'text' },
  });
});

test('actionCreators.app.todo.toggle', () => {
  expect(actionCreators.app.todo.toggle({ id: 1 })).toEqual({
    type: 'APP/TODO/TOGGLE',
    payload: { id: 1 },
  });
});

test('actionCreators.app.todo.remove', () => {
  expect(actionCreators.app.todo.remove({ id: 1 })).toEqual({
    type: 'APP/TODO/REMOVE',
    payload: { id: 1 },
  });
});

test('actionCreators.app.hello.say', () => {
  expect(actionCreators.app.hello.say({ message: 'hello' })).toEqual({
    type: 'APP/HELLO/SAY',
    payload: { message: 'hello' },
  });
});
