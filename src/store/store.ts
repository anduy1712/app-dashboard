import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './reducers/productSlice';
import { userSlice } from './reducers/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    products: productSlice.reducer
  }
});
