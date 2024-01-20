import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: '',
  priceRenta: '10',
  mileMin: 0,
  mileMax: 0,
};
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    actualBrand(state, action) {
      state.brand = action.payload;
    },
    actualPriceRenta(state, action) {
      state.priceRenta = action.payload;
    },
    actualMileMin(state, action) {
      state.mileMin = action.payload;
    },
    actualMileMax(state, action) {
      state.mileMax = action.payload;
    },
    resezeT(state, action) {
      state.filter('');
    },
  },
});

export const filterReduser = filterSlice.reducer;
export const selectBrand = state => state.filter.brand;
export const selectFilter = state => state.filter;
export const {
  actualBrand,
  actualPriceRenta,
  actualMileMin,
  actualMileMax,
  resezeT,
} = filterSlice.actions;
