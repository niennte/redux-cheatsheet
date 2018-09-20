// @flow

import React from 'react';
import { connect } from 'react-redux';

import actionCreators from '../action/index';

type Props = {
  dispatch: Function,
  todoCounter: number
};

const mapStateToAddTodoProps = state => ({
  todoCounter: state.todoCounter,
});

const AddTodo = ({ dispatch, todoCounter }: Props) => {
  let input;
  return (
    <div>
      <input ref={(node) => { input = node; }} />
      <button
        type="button"
        onClick={() => {
          dispatch(actionCreators.app.todo.add({ text: input.value, id: todoCounter }));
          dispatch(actionCreators.app.todo.increment());
          input.value = '';
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default connect(mapStateToAddTodoProps)(AddTodo);
