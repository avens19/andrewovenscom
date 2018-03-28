import initialState from './initialState';

export default function loading(state = initialState.asyncCallsInProgress, action) {
  if (action.type.substr(-6) === '_ASYNC') {
    return state + 1;
  }
  if (action.type.substr(-8) === '_SUCCESS') {
    return state - 1;
  }
  if (action.type.substr(-8) === '_FAILURE') {
    return state - 1;
  }

  return state;
}