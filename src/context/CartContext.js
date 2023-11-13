import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCart = () => {
   return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);

   const addToCart = (item) => {
      const itemExists = cart.find((cartItem) => cartItem.courseName === item.courseName);

      if (itemExists) {
         const updatedCart = cart.map((cartItem) =>
            cartItem.courseName === item.courseName ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
         );
         setCart(updatedCart);
      } else {
         setCart([...cart, { ...item, quantity: 1 }]);
      }
   };

   return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
};
