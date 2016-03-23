import { List, Map } from 'immutable';
import * as ActionTypes from '../constants/ActionTypes.js';

const initialState = List();

export function books(state = initialState, action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.LOAD_BOOKS_REQUEST:
      return state;
    case ActionTypes.LOAD_BOOKS_SUCCESS:
      console.log(state);
      payload.every((book) => {
        console.log(book);
        state.push(Map(book));
        return true;
      });
      console.log(type, payload);
      console.log(state);
      return state;
    case ActionTypes.LOAD_BOOKS_FAILURE:
      return state;
    default:
      return state;
  }
}
