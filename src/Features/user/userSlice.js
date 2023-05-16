import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

import {
  registerCustomer
} from './userReducer'


// Local Storage Data
const customerData = JSON.parse(localStorage.getItem('customer'))
const customerToken = localStorage.getItem('customertoken')
const addressData = JSON.parse(localStorage.getItem('address'))
const paymentData = localStorage.getItem('payment')

const initialState = {
  isSuccess: false,
  isError: false,
  userInfo: customerData ? customerData : null,
  userDetails: null,
  isLoading: false,
  token: customerToken ? customerToken : "",
  showAlert: false,
  users: null,
  alertText: "",
  alertType: "",
  addressData: addressData ? addressData : null,
  paymentData: paymentData ? paymentData : null,
  userpage: 1,
  usernoOfpage: 0,
  totalUser: 0,
  userStats: null,
  userAlert: false,
};





const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUserAlertError: (state, action) => {
      state.showAlert = false
      state.alertText = ''
      state.alertType = ''
      state.isError = false
      state.isSuccess = false
      state.userAlert = false
    },
    handleform: (state, action) => {
      const formdata = action.payload
      const {
        user_name,
        user_email,
        message,
        subject
      } = formdata
      if (!user_email || !user_name || !subject || !message) {
        state.showAlert = true
        state.alertText = 'Please fill in the required form data'
        state.alertType = 'danger'
      }
    },
    handleMessage: (state, action) => {
      const formdata = action.payload
      state.showAlert = true
      state.alertText = formdata
      state.alertType = 'sucess'
    },
    extraReducers: {

      [registerCustomer.pending]: (state) => {
        state.isLoading = true;
      },
      [registerCustomer.fulfilled]: (state, action) => {
        // 
        state.isLoading = false;
        state.isSuccess = true;
        state.showAlert = true
        state.alertText = 'Registration successfull. ...Redirecting soon!'
        state.alertType = 'success'
      },
      [registerCustomer.rejected]: (state, action) => {

        state.isLoading = false;
        state.isError = true
        state.showAlert = true
        state.alertText = action.payload
        state.alertType = 'danger'
      },
    }
  }
});

// console.log(userSlice);
export const {
  clearUserAlertError,
  handleform,
  handleMessage
} = userSlice.actions

export default userSlice.reducer;
