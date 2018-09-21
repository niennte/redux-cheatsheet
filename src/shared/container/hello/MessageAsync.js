// @flow

import { connect } from 'react-redux';

import MessageAsync from '../../component/hello/Message';

const mapStateToProps = state => ({
  message: state.helloMessageAsync,
});

export default connect(mapStateToProps)(MessageAsync);
