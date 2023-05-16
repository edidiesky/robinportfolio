import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from './Features/toggle/toggleSlice'
import userReducer from './Features/user/userSlice'
export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    user:userReducer
  },
});
