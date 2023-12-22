// Filter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../redux/contacts/contactsSlice';
import './Filter.css'; // Додано імпорт стилів

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="Filter">
      {' '}
      {/* Додано клас Filter */}
      <label>
        Filter contacts by name:
        <input type="text" value={filter} onChange={handleFilterChange} />
      </label>
    </div>
  );
};

export default Filter;
