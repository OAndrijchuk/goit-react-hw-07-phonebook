import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './asyncThuncs';

const allThunks = keyWord => {
  const thunks = [fetchContactsThunk, addContactThunk, deleteContactThunk];
  return thunks.map(thunk => thunk[keyWord]);
};

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload
        );
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(...allThunks('pending')), (state, { payload }) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...allThunks('rejected')), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
