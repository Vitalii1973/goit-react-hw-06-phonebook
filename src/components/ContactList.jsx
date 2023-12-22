import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from './ContactListItem';
import { deleteContact } from '../redux/contacts/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const { data: contacts = [], filter } = useSelector(state => state.contacts);

  if (!Array.isArray(contacts)) {
    console.error('contacts is not an array:', contacts);
    return null;
  }

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  const deleteContactHandler = contactId => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this contact?'
    );
    if (confirmDelete) {
      dispatch(deleteContact(contactId));
    }
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={deleteContactHandler}
        />
      ))}
    </ul>
  );
};

export default ContactList;
