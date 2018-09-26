// @flow

const user = (
  state: Object = {
    loggedIn: false,
    id: '',
    userName: '',
  },
  action: { type: string, payload: any },
) => {
  switch (action.type) {
    case 'APP/CHAT/USER':
      return Object.assign({}, state, {
        id: action.payload.id,
      });
    case 'APP/USER/LOGIN/SUCCESS':
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
};

export default user;
