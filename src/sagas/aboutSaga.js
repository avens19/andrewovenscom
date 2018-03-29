import { call, put, select, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { loadAboutsSuccess } from '../actions/aboutActions';
import api from '../api';
import { ABOUTS } from '../api/dataTypes';

export function* getAllAbouts() {
  const state = yield select();
  let abouts = [];
  if (state.abouts.length) {
    abouts = state.abouts;
  } else {
    const aboutResponse = yield call(api.getData, ABOUTS);
    abouts = aboutResponse.data;
  }
  yield put(loadAboutsSuccess(abouts));
}

function* aboutSaga() {
  yield takeEvery(types.LOAD_ABOUTS_ASYNC, getAllAbouts);
}

export default aboutSaga;