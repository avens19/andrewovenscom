import { loadSkillsAsync, loadSkillsSuccess } from './skillActions';
import * as types from './actionTypes';

it('emits a load skills async action', () => {
  expect(loadSkillsAsync()).toEqual({ type: types.LOAD_SKILLS_ASYNC });
});

it('emits a load skills success action with a skills property', () => {
  expect(loadSkillsSuccess([ 'moo' ])).toEqual({ type: types.LOAD_SKILLS_SUCCESS, skills: [ 'moo' ] });
});