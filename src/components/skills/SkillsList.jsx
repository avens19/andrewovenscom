import React from 'react';
import PropTypes from 'prop-types';

export default function SkillsList({ skills }) {
  return (
    <ul>
      {skills.map((skill) =>
        <li key={skill.id}>
          {skill.value}
        </li>
      )}
    </ul>
  );
}

SkillsList.propTypes = {
  skills: PropTypes.array.isRequired
};