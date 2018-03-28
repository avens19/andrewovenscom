import * as types from './actionTypes';

export function loadAboutsAsync() {
  return {type: types.LOAD_ABOUTS_ASYNC};
}

export function loadAboutsSuccess(abouts) {
  return {type: types.LOAD_ABOUTS_SUCCESS, abouts: abouts};
}