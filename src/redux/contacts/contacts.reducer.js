import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';

import axios from 'axios';

console.log('Before createAsyncThunk');
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async ({ page = 1, limit = 12 }, thunkApi) => {
    try {
      const { data } = await axios.get(
        `https://65e85b1c4bb72f0a9c4f090a.mockapi.io/cars?limit=${limit}&page=${page}`
      );
      console.log('data: ', data); // Вивести дані у консоль
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
console.log('After createAsyncThunk');

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
        state.error = null;
      })

      .addMatcher(isAnyOf(fetchContacts.pending), state => {
        state.isLoading = true;
        state.error = null;
      })

      .addMatcher(isAnyOf(fetchContacts.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const contactsReducer = contactsSlice.reducer;
