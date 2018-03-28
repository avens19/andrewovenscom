import { loadAboutsAsync, loadAboutsSuccess } from './aboutActions';
import * as types from './actionTypes';

it('emits a load abouts async action', () => {
  expect(loadAboutsAsync()).toEqual({ type: types.LOAD_ABOUTS_ASYNC });
});

it('emits a load abouts success action with an abouts property', () => {
  expect(loadAboutsSuccess([ 'moo' ])).toEqual({ type: types.LOAD_ABOUTS_SUCCESS, abouts: [ 'moo' ] });
});