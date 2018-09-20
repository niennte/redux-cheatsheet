// @flow

import { connect } from 'react-redux';

import Message from '../../component/hello/Message';

const mapStateToProps = state => ({
  message: state.helloMessage,
});

export default connect(mapStateToProps)(Message);
