import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    products: productSlice,
    users: userSlice
  }
});

export default store;
