import { createActions } from 'redux-actions';

const actionCreators = createActions({
  APP: {
    TODO: {
      // given undefined, the identity function will be used
      INCREMENT: undefined,
      ADD: undefined,
      TOGGLE: undefined,
      REMOVE: undefined,
      SET_VISIBILITY_FILTER: undefined,
    },
  },
});

export default actionCreators;
