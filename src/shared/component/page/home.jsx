// @flow

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import { APP_NAME } from '../../config';

const HomePage = () => (
  <Fragment>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <p>Home</p>
  </Fragment>
);
export default HomePage;
