import { List } from 'immutable';
import * as ActionTypes from '../constants/ActionTypes.js';

const initialBookState = List();

export function books(state = initialBookState, action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.LOAD_BOOKS_REQUEST:
      return state;
    case ActionTypes.LOAD_BOOKS_SUCCESS:
      return List(payload);
    case ActionTypes.LOAD_BOOKS_FAILURE:
      return state;
    default:
      return state;
  }
}
