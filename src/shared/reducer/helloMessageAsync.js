// @flow

const helloMessageAsync = (
  state: string = 'Initial reducer message for async call',
  action: { type: string, payload: any },
) => {
  switch (action.type) {
    case 'APP/HELLO/ASYNC/REQUEST':
      return 'Loading...';
    case 'APP/HELLO/ASYNC/SUCCESS':
      return action.payload.messageAsync;
    case 'APP/HELLO/ASYNC/FAILURE':
      return 'No message received, please check your connection';
    default:
      return state;
  }
};

export default helloMessageAsync;
