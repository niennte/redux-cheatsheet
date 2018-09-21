// @flow

import { connect } from 'react-redux';

import actionCreators from '../../action/index';
import Button from '../../component/hello/Button';

const mapStateToProps = () => ({
  label: 'Say hello',
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(actionCreators.app.hello.say({ message: 'Hello!' })); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
