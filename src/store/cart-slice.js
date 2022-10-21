import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./cart-utils";

const initialCartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
