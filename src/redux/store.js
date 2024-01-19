import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './CarsSlice';
import { favoriteReducer } from './FavoriteSlice';
export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorite: favoriteReducer,
    // filters: filtersReducer,
  },
});
