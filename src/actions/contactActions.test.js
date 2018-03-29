import { loadContactsAsync, loadContactsSuccess } from './contactActions';
import * as types from './actionTypes';

it('emits a load contacts async action', () => {
  expect(loadContactsAsync()).toEqual({ type: types.LOAD_CONTACTS_ASYNC });
});

it('emits a load contacts success action with a contacts property', () => {
  expect(loadContactsSuccess([ 'moo' ])).toEqual({ type: types.LOAD_CONTACTS_SUCCESS, contacts: [ 'moo' ] });
});