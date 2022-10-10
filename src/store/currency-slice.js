import { createSlice } from "@reduxjs/toolkit";

const initialCurrencyState = {
  symbol: "$",
};

const currencySlice = createSlice({
  name: "currency",
  initialState: initialCurrencyState,
  reducers: {
    getCurrencyFormat(state, action) {
      state.symbol = action.payload;
    },
  },
});

export const { getCurrencyFormat } = currencySlice.actions;
export default currencySlice.reducer;
