// @flow

import { connect } from 'react-redux';

import { sayHelloAsync } from '../../action/index';
import Button from '../../component/hello/Button';

const mapStateToProps = () => ({
  label: 'Say hello asynchronously and send 1234',
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(sayHelloAsync(1234)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
