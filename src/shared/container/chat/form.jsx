// @flow

import React from 'react';
import { connect } from 'react-redux';

import { emitMessage, emitIsTyping } from '../../action/index';

type Props = {
  dispatch: Function,
};

const mapStateToAddTodoProps = state => ({
  todoCounter: state.todoCounter,
});

class ChatForm extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      userIsTyping: false,
      timeout: null,
    };
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.emitCancelUserIsTyping = this.emitCancelUserIsTyping.bind(this);
  }

  emitCancelUserIsTyping() {
    if (!this.state.userIsTyping) {
      this.props.dispatch(emitIsTyping(false));
    }
  }

  handleKeyUp() {
    window.clearTimeout(this.state.timeout);
    this.setState({
      userIsTyping: false,
      timeout: window.setTimeout(this.emitCancelUserIsTyping, 1000),
    });
  }

  handleKeyDown() {
    window.clearTimeout(this.state.timeout);
    this.setState({
      userIsTyping: true,
      timeout: null
    });
    this.props.dispatch(emitIsTyping(true));

  }

  handleSubmit() {
    window.clearTimeout(this.state.timeout);
    this.setState({
      userIsTyping: false,
    });
  }

  render() {
    const { dispatch } = this.props;
    let input;
    return (
      <div>
        <ul id="messages" />
        <form
          action=""
          className="fixed-bottom bg-light p-1"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(emitMessage(input.value));
            input.value = '';
          }}
        >
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Message"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              id="m"
              autoComplete="off"
              ref={(node) => {
                input = node;
              }}
              onKeyDown={this.handleKeyDown}
              onKeyUp={this.handleKeyUp}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToAddTodoProps)(ChatForm);
