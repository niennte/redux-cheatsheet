// @flow

import React from 'react';
import Helmet from 'react-helmet';

import HelloAsyncButton from '../../container/hello/HelloButtonAsync';
import MessageAsync from '../../container/hello/MessageAsync';

const title = 'Async Hello Page';

const HelloAsyncPage = () => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello asynchronously' },
        { property: 'og:title', content: title },
      ]}
    />
    <h2>{title}</h2>
    <MessageAsync />
    <HelloAsyncButton />
  </div>
);

export default HelloAsyncPage;
