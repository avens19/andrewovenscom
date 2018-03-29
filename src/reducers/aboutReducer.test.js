import aboutReducer from './aboutReducer';
import { loadAboutsSuccess } from '../actions/aboutActions';

it('returns the state if the action doesnt match', () => {
  expect(aboutReducer({ foo: 'bar' }, { type: 'moo' })).toEqual({ foo: 'bar' });
});

it('returns the new abouts from the loadAboutsSuccess action', () => {
  expect(aboutReducer({ foo: 'bar' }, loadAboutsSuccess({ baz: 'bat' }))).toEqual({ baz: 'bat' });
});