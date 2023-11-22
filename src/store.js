import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/CartSlice';

const store = configureStore({
   reducer: {
      cart: cartReducer,
      // Các reducer khác nếu có
   },
});

export default store;
