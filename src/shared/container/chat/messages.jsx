// @flow

import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

const styles = {
  user: {
    listStyle: 'none',
  },
  ownSelf: {
    fontWeight: 'bold',
    color: 'orange',
  },
  other: {
    fontStyle: 'italic',
    color: 'green',
  },
};

type Props = {
  messages: List,
  userId: string,
  classes: Object,
};

const mapStateToProps = state => ({
  messages: state.chat,
  userId: state.user.id,
});

const ChatMessages = ({ messages, userId, classes }: Props) => (
  <div>
    <ul id="messages">
      {messages.map((message) => {
        const userCSS = message.user === userId ? classes.ownSelf : classes.other;
        const userName = message.user === userId ? 'You' : message.user;
        return (
          <li key={message.id} className={`${classes.user} ${userCSS}`}>
            <strong>{`${userName}: `}</strong>
            {message.message}
          </li>
        );
      })}
    </ul>
  </div>
);

const ChatMessageContainer = connect(mapStateToProps)(ChatMessages);
export default injectSheet(styles)(ChatMessageContainer);
