// @flow

import React from 'react';
import { connect } from 'react-redux';

import { emitMessage } from '../../action/index';


type Props = {
  dispatch: Function,
};

const mapStateToAddTodoProps = state => ({
  todoCounter: state.todoCounter,
});

const ChatForm = ({ dispatch }: Props) => {
  let input;
  return (
    <div>
      <ul id="messages" />
      <form
        action=""
        className="fixed-bottom bg-light p-1"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Message" aria-label="Recipient's username" aria-describedby="basic-addon2" id="m" autoComplete="off" ref={(node) => { input = node; }} />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="submit"
              onClick={() => {
                dispatch(emitMessage(input.value));
                input.value = '';
              }}
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default connect(mapStateToAddTodoProps)(ChatForm);
