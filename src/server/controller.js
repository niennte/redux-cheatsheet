// @flow

/* eslint-disable max-len */
/*
 Controller would typically make business logic and database calls, but in our case we just hard-code some results. Those results are passed back to the routing module to be used to initialize our server-side Redux store.
 */
/* eslint-enable max-len */

export const homePage = () => null;

export const helloPage = () => ({
  helloMessage: 'Server-side preloaded message',
});

export const helloAsyncPage = () => ({
  helloMessageAsync: 'Server-side preloaded message for async page',
});

export const todoListPage = () => ({
  todoCounter: 5,
  todos: [],
  visibilityFilter: 'SHOW_ACTIVE',
});

export const helloEndpoint = (num: number) => ({
  serverMessage: `Hello from the server! (received ${num})`,
});
