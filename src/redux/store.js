import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { carsReducer } from './cars/cars.reducer';
import { favoritesReducer } from './favorites/favorites.reducer';

const carsConfig = {
  key: 'cars',
  storage,
  whitelist: ['cars'],
};

export const store = configureStore({
  reducer: {
    carsStore: persistReducer(carsConfig, carsReducer),
    favoritesStore: favoritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
