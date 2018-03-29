import skillsReducer from './skillsReducer';
import { loadSkillsSuccess } from '../actions/skillActions';

it('returns the state if the action doesnt match', () => {
  expect(skillsReducer({ foo: 'bar' }, { type: 'moo' })).toEqual({ foo: 'bar' });
});

it('returns the new skills from the loadSkillsSuccess action', () => {
  expect(skillsReducer({ foo: 'bar' }, loadSkillsSuccess({ baz: 'bat' }))).toEqual({ baz: 'bat' });
});