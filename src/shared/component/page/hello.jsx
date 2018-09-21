// @flow

import React from 'react';
import Helmet from 'react-helmet';

import HelloButton from '../../container/hello/HelloButton';
import Message from '../../container/hello/Message';

const title = 'Hello Page';

const HelloPage = () => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: title },
      ]}
    />
    <h2>{title}</h2>
    <Message />
    <HelloButton />
  </div>
);

export default HelloPage;
