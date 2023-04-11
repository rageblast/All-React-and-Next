import { createSlice } from '@reduxjs/toolkit';

import { addCartItem, removeCartItem, clearCartItem } from './cart.action';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isCartOpen: false,
    cartItems: [],
  },
  reducers: {
    addItemToCart: {
      reducer(state, action) {
        state.cartItems = action.payload;
      },
      prepare(cartItems, productToAdd) {
        const newCartItems = addCartItem(cartItems, productToAdd);
        return {
          payload: newCartItems,
        };
      },
    },
    removeItemFromCart: {
      reducer(state, action) {
        state.cartItems = action.payload;
      },
      prepare(cartItems, cartItemToRemove) {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        return {
          payload: newCartItems,
        };
      },
    },
    clearItemFromCart: {
      reducer(state, action) {
        state.cartItems = action.payload;
      },
      prepare(cartItems, cartItemToClear) {
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        return {
          payload: newCartItems,
        };
      },
    },
    setIsCartOpen: (state, action) => {
      return {
        ...state,
        isCartOpen: action.payload,
      };
    },
  },
  extraReducers(builder) {
    builder.addDefaultCase((state, action) => {
      return state;
    });
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
