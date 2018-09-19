const addTodo = (text, nextTodoId) => ({
  type: 'ADD_TODO',
  id: nextTodoId,
  text,
});

export default addTodo;
