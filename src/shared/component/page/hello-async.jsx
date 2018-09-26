// @flow

import React from 'react';
import Helmet from 'react-helmet';

import LoginForm from '../../container/login/form';

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
    <LoginForm />
  </div>
);

export default HelloAsyncPage;
