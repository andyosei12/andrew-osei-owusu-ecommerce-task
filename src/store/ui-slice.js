import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  isCartOpen: false,
  isCurrencySwitchDropdownOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggleMiniCartOpen(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    toggleCurrencySwitchDropdown(state) {
      state.isCurrencySwitchDropdownOpen = !state.isCurrencySwitchDropdownOpen;
    },
  },
});

export const { toggleMiniCartOpen, toggleCurrencySwitchDropdown } =
  uiSlice.actions;
export default uiSlice.reducer;
