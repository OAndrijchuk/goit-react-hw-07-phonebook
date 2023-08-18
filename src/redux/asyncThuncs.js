import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const contactsInstans = axios.create({
  baseURL: 'https://64de1455825d19d9bfb205ce.mockapi.io',
});

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const respons = await contactsInstans.get('/contacts');
      return respons.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const respons = await contactsInstans.post('/contacts', contact);
      return respons.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const respons = await contactsInstans.delete(`/contacts/${id}`);
      return respons.data.id;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
