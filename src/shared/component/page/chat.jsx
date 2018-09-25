// @flow

import React from 'react';
import Helmet from 'react-helmet';

import ChatForm from '../../container/chat/form';
import ChatMessages from '../../container/chat/messages';

const title = 'Chat Page';

const ChatPage = () => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: title },
      ]}
    />
    <h2>{title}</h2>
    <ChatMessages />
    <ChatForm />
  </div>
);

export default ChatPage;
