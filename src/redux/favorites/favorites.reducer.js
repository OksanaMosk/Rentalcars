import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      console.log('Adding favorite:', action.payload);
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      console.log('Removing favorite:', action.payload);
      const updatedFavorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
      state.favorites = updatedFavorites;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
