import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './CarsSlice';
import { favoriteReducer } from './FavoriteSlice';
import { filterSlice } from './FilterSlise';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorites',
  storage,
};
const persistedReducer = persistReducer(persistConfig, favoriteReducer);
export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorite: persistedReducer,
    filter: filterSlice.reducer,
  },
});
export const persistor = persistStore(store);
