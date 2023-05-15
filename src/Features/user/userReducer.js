import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const Registerurl = '/api/v1/auth/register';
const Loginurl = '/api/v1/auth/login';

export const registerCustomer = createAsyncThunk(
  'registerUser',
  async (registerData, thunkAPI) => {
    try {
      const { data } = await axios.post(Registerurl, registerData);
      localStorage.setItem('customer', JSON.stringify(data.user))
      localStorage.setItem('customertoken', data.token)
      return data;

    } catch (error) {

      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message
        : error.message);
    }
  }
);
