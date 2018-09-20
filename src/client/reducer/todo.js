// @flow

import Immutable from 'immutable';
import type { fromJS as Immut } from 'immutable';

const initialState = Immutable.fromJS({});

// Reducer composition pattern
// state refers to individual todo
const todo = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case 'APP/TODO/ADD':
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      };
    case 'APP/TODO/TOGGLE':
      if (state.id !== action.payload.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed,
      });
    case 'APP/TODO/REMOVE':
      if (state.id !== action.payload.id) {
        return state;
      }
      return null;
    default:
      return state;
  }
};

export default todo;
