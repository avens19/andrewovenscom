import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) =>
        <ContactItem contact={contact} key={contact.id} />
      )}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired
};