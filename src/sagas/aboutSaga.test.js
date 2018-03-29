import aboutSaga, { getAllAbouts } from './aboutSaga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { loadAboutsSuccess } from '../actions/aboutActions';
import api from '../api';
import { ABOUTS } from '../api/dataTypes';

it('takes every load abouts async action and calls the getAllAbouts saga', () => {
  const gen = aboutSaga();
  expect(gen.next().value).toEqual(takeEvery(types.LOAD_ABOUTS_ASYNC, getAllAbouts));
});

it('fires success with the existing abouts if they exist in the state', () => {
  const gen = getAllAbouts();
  expect(gen.next().value).toEqual(select());
  expect(gen.next({ abouts: [ { foo: 'bar' }, { baz: 'bat' } ] }).value).toEqual(put(loadAboutsSuccess([ { foo: 'bar' }, { baz: 'bat' } ])));
});

it('fires success with the api returned abouts if none exist in the state', () => {
  const gen = getAllAbouts();
  expect(gen.next().value).toEqual(select());
  expect(gen.next({ abouts: [] }).value).toEqual(call(api.getData, ABOUTS));
  expect(gen.next({ data: [ { foo: 'bar' }, { baz: 'bat' } ] }).value).toEqual(put(loadAboutsSuccess([ { foo: 'bar' }, { baz: 'bat' } ])));
});