// @flow

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';

import { APP_NAME } from '../../config';

const styles = {
  hoverMe: {
    '&:hover': {
      color: 'red',
    },
  },
  '@media (max-width: 800px)': {
    resizeMe: {
      color: 'red',
    },
  },
  specialButton: {
    composes: ['btn', 'btn-primary'],
    backgroundColor: 'limegreen',
  },
};

const HomePage = ({ classes }: { classes: Object }) => (
  <Fragment>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <p>Home</p>
    <h3 className="mb-3">JSS</h3>
    <p className={classes.hoverMe}>Hover me.</p>
    <p className={classes.resizeMe}>Resize the window.</p>
    <button type="button" className={classes.specialButton}>Composition</button>
  </Fragment>
);
export default injectSheet(styles)(HomePage);
