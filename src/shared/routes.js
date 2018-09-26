// @flow

export const HOME_PAGE_ROUTE = '/';
export const HELLO_PAGE_ROUTE = '/hello';
export const HELLO_ASYNC_PAGE_ROUTE = '/hello-async';
export const TODO_LIST_PAGE_ROUTE = '/todo';
export const NOT_FOUND_DEMO_PAGE_ROUTE = '/404';
export const CHAT_PAGE_ROUTE = '/chat';


// eslint-disable-next-line import/prefer-default-export
export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`;

export const loginEndpointRoute = (userName: ?string) => `/ajax/login/${userName || ':userName'}`;
