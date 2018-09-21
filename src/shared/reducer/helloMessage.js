// @flow

const helloMessage = (
  state: string = 'Initial reducer message',
  action: { type: string, payload: any },
) => {
  switch (action.type) {
    case 'APP/HELLO/SAY':
      return action.payload.message;
    default:
      return state;
  }
};

export default helloMessage;
