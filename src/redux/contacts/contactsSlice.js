import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    data: [], // тепер data - це масив контактів
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      const { name } = action.payload;
      const isContactExists = state.data.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isContactExists) {
        alert(`Contact with name '${name}' already exists!`);
      } else {
        state.data.push(action.payload);
      }
    },
    deleteContact: (state, action) => {
      state.data = state.data.filter(contact => contact.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
