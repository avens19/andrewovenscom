import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function skills(state = initialState.skills, action) {
  switch (action.type) {
    case types.LOAD_SKILLS_SUCCESS: {
      return action.skills;
    }
    default: {
      return state;
    }
  }
}