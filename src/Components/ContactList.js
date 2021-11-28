import React from 'react';
import Contact from './Contact';

export default function ContactList(props) {
  const { contactList, handleDelete } = props.data;
  return (
    <>
      {contactList.map((contact) => (
        <Contact
          data={{ contact, handleDelete: handleDelete }}
        />
      ))}
    </>
  );
}
