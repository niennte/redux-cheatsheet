// @flow

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

const title = 'Page Not Found';

const NotFoundPage = () => (
  <Fragment>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: title },
      ]}
    />
    <h2>{title}</h2>
  </Fragment>
);

export default NotFoundPage;
