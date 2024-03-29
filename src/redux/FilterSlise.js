import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: '',
  priceRenta: '10',
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
  },
});

export const filterReduser = filterSlice.reducer;
export const selectBrand = state => state.filter.brand;
export const selectPriceRenta = state => state.filter.priceRenta;
export const selectFilter = state => state.filter;
export const { actualBrand, actualPriceRenta } = filterSlice.actions;
