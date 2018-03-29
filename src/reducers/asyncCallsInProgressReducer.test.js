import asyncCallsInProgressReducer from './asyncCallsInProgressReducer';

it('returns the state if the action doesnt match', () => {
  expect(asyncCallsInProgressReducer(5, { type: 'moo' })).toEqual(5);
});

it('reduces the count by one on a success action', () => {
  expect(asyncCallsInProgressReducer(5, { type: 'moo_SUCCESS' })).toEqual(4);
});

it('reduces the count by one on a failure action', () => {
  expect(asyncCallsInProgressReducer(5, { type: 'moo_FAILURE' })).toEqual(4);
});

it('increases the count by one on an async action', () => {
  expect(asyncCallsInProgressReducer(5, { type: 'moo_ASYNC' })).toEqual(6);
});