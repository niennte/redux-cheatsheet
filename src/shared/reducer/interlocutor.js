// @flow

const interlocutor = (
  state: string = {
    user: {
      id: '',
      isTyping: false,
    },
  },
  action: { type: string, payload: any },
) => {
  switch (action.type) {
    case 'APP/CHAT/INTELOCUTOR_TYPING':
      return {
        user: action.payload.user,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export default interlocutor;
