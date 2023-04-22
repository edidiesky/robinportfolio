import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from './Features/toggle/toggleSlice'

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});
