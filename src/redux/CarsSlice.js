import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetcherAllCars, getByIdCar } from '../redux/operations';
import { selectFilter } from '../redux/FilterSlise';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetcherAllCars.pending, (state, action) => {
        handlePending(state, action);
      })
      .addCase(fetcherAllCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.cars = [...state.cars, ...payload];
      })

      .addCase(getByIdCar.pending, (state, action) => {
        handlePending(state, action);
      })
      .addCase(getByIdCar.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })

      .addCase(fetcherAllCars.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(getByIdCar.rejected, (state, action) => {
        handleRejected(state, action);
      });
  },
});

export const carsReducer = carsSlice.reducer;
export const selectCars = state => state.cars.cars;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;

export const selectfilteredCars = createSelector(
  [selectCars, selectFilter],
  (cars, filter) => {
    if (filter.brand === '' && filter.priceRenta === '10') {
      return cars;
    } else if (filter.priceRenta === '10' && filter.brand !== '') {
      return cars.filter(car => car.make.includes(filter.brand));
    } else if (filter.priceRenta !== '10' && filter.brand === '') {
      return cars.filter(car => car.rentalPrice.includes(filter.priceRenta));
    } else if (filter.priceRenta !== '10' && filter.brand !== '') {
      return cars.filter(
        car =>
          car.make.includes(filter.brand) &&
          car.rentalPrice.includes(filter.priceRenta)
      );
    }
  }
);
