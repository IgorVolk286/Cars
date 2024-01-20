import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './CarsSlice';
import { favoriteReducer } from './FavoriteSlice';
import { filterSlice } from './FilterSlise';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorite: favoriteReducer,
    filter: filterSlice.reducer,
  },
});
