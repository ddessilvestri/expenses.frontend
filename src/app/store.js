import { configureStore } from '@reduxjs/toolkit';
import expensesSlice from './expensesSlice';
import ToastMiddleware from '../middlewares/ToastMiddlewares';
import authenticationSlice from './authenticationSlice';

export const store = configureStore({
  reducer: {
    expensesSlice: expensesSlice,
    authenticationSlice: authenticationSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ToastMiddleware)
});
