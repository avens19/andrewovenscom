import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function about(state = initialState.abouts, action) {
  switch (action.type) {
    case types.LOAD_ABOUTS_SUCCESS: {
      return action.abouts;
    }
    default: {
      return state;
    }
  }
}