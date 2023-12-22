import React from 'react';
import { useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';
import { selectContacts, selectFilter } from '../redux/Selector';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
