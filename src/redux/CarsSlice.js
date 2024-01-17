import { createSlice } from '@reduxjs/toolkit';
import { fetcherAllCars, getByIdCar } from '../redux/operations';

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
    cars: [null],
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
        state.cars = payload;
        console.log(payload);
      })
      .addCase(getByIdCar.pending, (state, action) => {
        handlePending(state, action);
      })
      .addCase(getByIdCar.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const OneCar = payload;
        const indexCar = state.cars.findIndex(car => car.id === payload.id);
        state.cars[indexCar] = OneCar;
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

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) =>
//     contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     )
// );
