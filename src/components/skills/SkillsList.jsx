import React from 'react';
import PropTypes from 'prop-types';

export default function SkillsPage(props) {
  return (
    <ul>
      {props.skills.map((skills) =>
        <li>
          {skills.value}
        </li>
      )}
    </ul>
  );
};

SkillsPage.propTypes = {
  skills: PropTypes.array.isRequired
};