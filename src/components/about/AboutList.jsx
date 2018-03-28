import React from 'react';
import PropTypes from 'prop-types';

export default function AboutList({ abouts }) {
  return (
    <ul>
      {abouts.map((about) =>
        <li key={about.id}>
          {about.value}
        </li>
      )}
    </ul>
  );
}

AboutList.propTypes = {
  abouts: PropTypes.array.isRequired
};