import React from 'react';
import PropTypes from 'prop-types';

export default function SkillsPage(props) {
  return (
    <ul>
      {props.skills.map((skill) =>
        <li key={skill.id}>
          {skill.value}
        </li>
      )}
    </ul>
  );
};

SkillsPage.propTypes = {
  skills: PropTypes.array.isRequired
};