import contactReducer from './contactReducer';
import { loadContactsSuccess } from '../actions/contactActions';

it('returns the state if the action doesnt match', () => {
  expect(contactReducer({ foo: 'bar' }, { type: 'moo' })).toEqual({ foo: 'bar' });
});

it('returns the new contacts from the loadContactsSuccess action', () => {
  expect(contactReducer({ foo: 'bar' }, loadContactsSuccess({ baz: 'bat' }))).toEqual({ baz: 'bat' });
});