// @flow

import React from 'react';
import Helmet from 'react-helmet';

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
    <p>Chat goes here</p>
  </div>
);

export default ChatPage;
