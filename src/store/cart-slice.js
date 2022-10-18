import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      console.log(action.payload);
      state.cartItems = [...state.cartItems, action.payload];
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
