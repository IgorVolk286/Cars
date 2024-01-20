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
  reducers: {
    delCar(state, { payload }) {
      state.favorites = state.favorites.filter(item => item.id !== payload);
    },
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
export const { delCar } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;

export const selectFavorite = state => state.favorite.favorites;
