import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoritesTerm: '',
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavoritesTerm(state, { payload }) {
      state.favoritesTerm = payload;
    },
  },
});

export const { setFavoritesTerm } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
