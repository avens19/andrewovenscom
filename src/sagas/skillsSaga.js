import { call, put, select, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { loadSkillsSuccess } from '../actions/skillActions';
import api from '../api';
import { SKILLS } from '../api/dataTypes';

function* getAllSkills() {
  const state = yield select();
  let skills;
  if (state.skills.length) {
    skills = state.skills;
  } else {
    const skillResponse = yield call(api.getData, SKILLS);
    skills = skillResponse.data;
  }
  yield put(loadSkillsSuccess(skills));
}

function* skillsSaga() {
  yield takeEvery(types.LOAD_SKILLS_ASYNC, getAllSkills);
}

export default skillsSaga;