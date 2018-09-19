// @flow

import React from 'react';
import { connect } from 'react-redux';

import addTodo from '../action/addTodo';
import incrementTodo from '../action/incrementTodo';

type Props = {
  dispatch: Function,
  todoCounter: number
};

// maps redux store state to components
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
          dispatch(addTodo(input.value, todoCounter));
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
