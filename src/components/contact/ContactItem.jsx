import React from 'react';
import PropTypes from 'prop-types';

export default function ContactItem({ contact }) {
  return (
    <li className="contact-item">
      <a href={contact.link} title={contact.title}>
        <i className={`fa fa-${contact.icon}`}></i>
      </a>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};