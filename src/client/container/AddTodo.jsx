// @flow

import React from 'react';
import { connect } from 'react-redux';

import addTodo from '../action/addTodo';
import incrementTodo from '../action/incrementTodo';

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
          dispatch(addTodo({ text: input.value, id: todoCounter }));
          dispatch(incrementTodo());
          input.value = '';
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default connect(mapStateToAddTodoProps)(AddTodo);
