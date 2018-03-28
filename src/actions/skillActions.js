import * as types from './actionTypes';

export function loadSkills() {
  return {type: types.LOAD_SKILLS};
}

export function loadSkillsSuccess(skills) {
  return {type: types.LOAD_SKILLS_SUCCESS, skills: skills};
}