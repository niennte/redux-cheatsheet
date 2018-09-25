// @flow

const chatMessage = (
  state: string = [],
  action: { type: string, payload: any },
) => {
  switch (action.type) {
    case 'APP/CHAT/CONNECT':
      return [...state, {
        message: 'Connecting...',
        id: state.length,
        user: 'connection',
      }];
    case 'APP/CHAT/ADD_MESSAGE':
      return [...state, {
        message: action.payload.message,
        id: state.length,
        user: action.payload.user,
      }];
    default:
      return state;
  }
};

export default chatMessage;
