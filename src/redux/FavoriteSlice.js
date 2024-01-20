import { createSlice } from '@reduxjs/toolkit';
import { getFavoriteCar } from '../redux/operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
export const favoriteSlice = createSlice({
  name: 'favorite',

  initialState: {
    favorites: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getFavoriteCar.pending, (state, action) => {
        handlePending(state, action);
      })
      .addCase(getFavoriteCar.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.favorites = [...state.favorites, payload];
      })
      .addCase(getFavoriteCar.rejected, (state, action) => {
        handleRejected(state, action);
      });
  },
});

export const favoriteReducer = favoriteSlice.reducer;
// export const selectIsLoading = state => state.cars.isLoading;
export const selectFavorite = state => state.favorite.favorites;
