// @flow

const user = (
  state: string = {
    user: {
      id: '',
    },
  },
  action: { type: string, payload: any },
) => {
  switch (action.type) {
    case 'APP/CHAT/USER':
      return {
        id: action.payload.id,
      };

    default:
      return state;
  }
};

export default user;
