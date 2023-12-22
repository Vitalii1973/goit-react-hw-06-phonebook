import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { addContact } from '../../redux/contacts/contactsSlice';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);

  const addContactHandler = newContact => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      alert(`Contact with name '${newContact.name}' already exists!`);
    } else {
      dispatch(addContact({ ...newContact, id: uuidv4() }));
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContactHandler} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
