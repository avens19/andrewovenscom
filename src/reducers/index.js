import { combineReducers } from 'redux';
import asyncCallsInProgressReducer from './asyncCallsInProgressReducer';
import skillsReducer from './skillsReducer';
import aboutReducer from './aboutReducer';
import contactReducer from './contactReducer';

const rootReducer = combineReducers({
  asyncCallsInProgress: asyncCallsInProgressReducer,
  skills: skillsReducer,
  abouts: aboutReducer,
  contacts: contactReducer
});

export default rootReducer;