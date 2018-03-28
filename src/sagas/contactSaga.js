import { call, put, select, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { loadContactsSuccess } from '../actions/contactActions';
import api from '../api';
import { CONTACTS } from '../api/dataTypes';

function* getAllContacts() {
  const state = yield select();
  let contacts;
  if (state.contacts.length) {
    contacts = state.contacts;
  } else {
    const contactResponse = yield call(api.getData, CONTACTS);
    contacts = contactResponse.data;
  }
  yield put(loadContactsSuccess(contacts));
}

function* contactSaga() {
  yield takeEvery(types.LOAD_CONTACTS_ASYNC, getAllContacts);
}

export default contactSaga;