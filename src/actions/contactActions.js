import * as types from './actionTypes';

export function loadContactsAsync() {
  return { type: types.LOAD_CONTACTS_ASYNC };
}

export function loadContactsSuccess(contacts) {
  return { type: types.LOAD_CONTACTS_SUCCESS, contacts: contacts };
}