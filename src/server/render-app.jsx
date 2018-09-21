// @flow

/* eslint-disable max-len */
/*
 ReactDOMServer.renderToString is where the magic happens. React will evaluate our entire shared App, and return a plain string of HTML elements. Provider works the same as on the client, but on the server, we wrap our app inside StaticRouter instead of BrowserRouter. In order to pass the Redux store from the server to the client, we pass it to window.__PRELOADED_STATE__ which is just some arbitrary variable name.
 */
/* eslint-enable max-len */


import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import initStore from './init-store';
import App from '../shared/App';
import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config';
import { isProd } from '../shared/util';

const renderApp = (
  location: string,
  plainPartialState: ?Object,
  routerContext: ?Object = {},
) => {
  const store = initStore(plainPartialState);
  const appHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={routerContext}>
        <App />
      </StaticRouter>
    </Provider>,
  );

  return `
  <!doctype html>
    <html>
      <head>
        <title>FIX ME!</title>
        <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
        </script>
        <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
      </body>
    </html>
  `;
};

export default renderApp;
