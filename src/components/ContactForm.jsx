import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../redux/contacts/contactsSlice';
import { selectContacts } from '../redux/Selector';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const addContactHandler = () => {
    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExists) {
      alert(`Contact with name '${name}' already exists!`);
    } else {
      dispatch(addContact({ name, number, id: nanoid() }));
      setName('');
      setNumber('');
    }
  };

  return (
    <form onSubmit={e => e.preventDefault()}>
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
