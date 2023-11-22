import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
   name: 'cart',
   initialState: {
      cartItems: [],
   },
   reducers: {
      addToCart: (state, action) => {
         const { courseName } = action.payload;
         const existingItem = state.cartItems.find((item) => item.courseName === courseName);
         if (existingItem) {
            existingItem.quantity++;
         } else {
            state.cartItems.push({ ...action.payload, quantity: 1 });
         }
      },
   },
});

export const { addToCart } = CartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;

export default CartSlice.reducer;
