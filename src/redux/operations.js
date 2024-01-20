import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65a7f71794c2c5762da80adf.mockapi.io/api/car';

export const fetcherAllCars = createAsyncThunk(
  '/cars',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/cars?page=${page}&limit=12`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getByIdCar = createAsyncThunk(
  '/cars/:id',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/cars/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavoriteCar = createAsyncThunk(
  '/cars/:id',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/cars/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
