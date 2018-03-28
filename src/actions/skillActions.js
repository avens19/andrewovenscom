import * as types from './actionTypes';

export function loadSkillsAsync() {
  return { type: types.LOAD_SKILLS_ASYNC };
}

export function loadSkillsSuccess(skills) {
  return { type: types.LOAD_SKILLS_SUCCESS, skills: skills };
}