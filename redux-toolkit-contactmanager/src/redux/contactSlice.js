import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    contacts: []
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload); // internally it's a clone
    },
    removeContact: (state, action) => {
      let newData = state.contacts.filter(contact => contact.email !== action.payload)
      state.contacts = newData;
    },
    clearContacts: (state) => {
     state.contacts= [];
    },
  },
})

// for view
export const { addContact, clearContacts, removeContact } = contactSlice.actions

//store
export default contactSlice.reducer

