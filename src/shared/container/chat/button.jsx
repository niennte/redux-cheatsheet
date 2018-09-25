// @flow

import { connect } from 'react-redux';

import { emitMessage } from '../../action/index';
import Button from '../../component/hello/Button';

const mapStateToProps = () => ({
  label: 'Say hello',
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(emitMessage()); },
});// connectToSocket

const ChatButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default ChatButton;
