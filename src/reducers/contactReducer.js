import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function contact(state = initialState.contacts, action) {
  switch (action.type) {
    case types.LOAD_CONTACTS_SUCCESS: {
      return action.contacts;
    }
    default: {
      return state;
    }
  }
}