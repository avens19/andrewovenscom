import contactSaga, { getAllContacts } from './contactSaga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { loadContactsSuccess } from '../actions/contactActions';
import api from '../api';
import { CONTACTS } from '../api/dataTypes';

it('takes every load contacts async action and calls the getAllContacts saga', () => {
  const gen = contactSaga();
  expect(gen.next().value).toEqual(takeEvery(types.LOAD_CONTACTS_ASYNC, getAllContacts));
});

it('fires success with the existing contacts if they exist in the state', () => {
  const gen = getAllContacts();
  expect(gen.next().value).toEqual(select());
  expect(gen.next({ contacts: [ { foo: 'bar' }, { baz: 'bat' } ] }).value).toEqual(put(loadContactsSuccess([ { foo: 'bar' }, { baz: 'bat' } ])));
});

it('fires success with the api returned contacts if none exist in the state', () => {
  const gen = getAllContacts();
  expect(gen.next().value).toEqual(select());
  expect(gen.next({ contacts: [] }).value).toEqual(call(api.getData, CONTACTS));
  expect(gen.next({ data: [ { foo: 'bar' }, { baz: 'bat' } ] }).value).toEqual(put(loadContactsSuccess([ { foo: 'bar' }, { baz: 'bat' } ])));
});