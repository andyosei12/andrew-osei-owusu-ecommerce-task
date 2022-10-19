import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  cartOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggleMiniCartOpen(state) {
      state.cartOpen = !state.cartOpen;
    },
  },
});

export const { toggleMiniCartOpen } = uiSlice.actions;
export default uiSlice.reducer;
