import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65a7f71794c2c5762da80adf.mockapi.io/api/car';

export const fetcherAllCars = createAsyncThunk(
  '/carsAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/cars');
      return response.data;
      console.log(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getByIdCar = createAsyncThunk();
//   'cars/contactsAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
