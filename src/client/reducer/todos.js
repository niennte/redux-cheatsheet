// @flow

import Immutable from 'immutable';
import type { fromJS as Immut } from 'immutable';

import todo from './todo';

const initialState = Immutable.fromJS([]);

// Reducer composition pattern
// state refers to array of todos
const todos = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case 'APP/TODO/ADD': // ES6 array array concat
      return [...state, todo(undefined, action)];
    case 'APP/TODO/TOGGLE': // array.map returns a new array
      return state.map(t => todo(t, action));
    case 'APP/TODO/REMOVE': // array.filter returns a new array
      return state.filter(t => (t.id !== action.payload.id));
    default:
      return state;
  }
};

export default todos;
