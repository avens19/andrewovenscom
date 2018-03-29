import skillsSaga, { getAllSkills } from './skillsSaga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { loadSkillsSuccess } from '../actions/skillActions';
import api from '../api';
import { SKILLS } from '../api/dataTypes';

it('takes every load skills async action and calls the getAllSkills saga', () => {
  const gen = skillsSaga();
  expect(gen.next().value).toEqual(takeEvery(types.LOAD_SKILLS_ASYNC, getAllSkills));
});

it('fires success with the existing skills if they exist in the state', () => {
  const gen = getAllSkills();
  expect(gen.next().value).toEqual(select());
  expect(gen.next({ skills: [ { foo: 'bar' }, { baz: 'bat' } ] }).value).toEqual(put(loadSkillsSuccess([ { foo: 'bar' }, { baz: 'bat' } ])));
});

it('fires success with the api returned skills if none exist in the state', () => {
  const gen = getAllSkills();
  expect(gen.next().value).toEqual(select());
  expect(gen.next({ skills: [] }).value).toEqual(call(api.getData, SKILLS));
  expect(gen.next({ data: [ { foo: 'bar' }, { baz: 'bat' } ] }).value).toEqual(put(loadSkillsSuccess([ { foo: 'bar' }, { baz: 'bat' } ])));
});