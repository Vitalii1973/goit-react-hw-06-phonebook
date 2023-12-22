import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact, setFilter } from '../redux/contacts/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const { data: contacts = [] } = useSelector(state => state.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const addContactHandler = () => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`Contact with name '${name}' already exists!`);
      setName('');
      setNumber('');
    } else {
      dispatch(addContact({ name, number, id: nanoid() }));
      setName('');
      setNumber('');
      dispatch(setFilter(''));
    }
  };

  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Number:
        <input
          type="text"
          value={number}
          onChange={e => setNumber(e.target.value)}
          required
        />
      </label>
      <button
        className="addContactButton"
        type="button"
        onClick={addContactHandler}
      >
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
