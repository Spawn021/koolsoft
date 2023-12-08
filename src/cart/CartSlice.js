import { createSlice } from '@reduxjs/toolkit';
const CartSlice = createSlice({
   name: 'cart',
   initialState: {
      cartItems: [],
   },
   reducers: {
      addToCart: (state, action) => {
         const { id } = action.payload;
         const existingItem = state.cartItems.find((item) => item.id === id);
         if (existingItem) {
         } else {
            state.cartItems.push({ ...action.payload, quantity: 1 });
         }
      },
      removeFromCart: (state, action) => {
         console.log('Action Payload:', action.payload);
         const productIdToRemove = action.payload;
         state.cartItems = state.cartItems.filter((item) => item.id !== productIdToRemove);
      },
   },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;

export default CartSlice.reducer;
