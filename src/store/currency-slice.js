import { createSlice } from "@reduxjs/toolkit";

const initialCurrencyState = {
  symbol: "$",
};

const currencySlice = createSlice({
  name: "currency",
  initialState: initialCurrencyState,
  reducers: {
    changeCurrencyFormat(state, { payload }) {
      state.symbol = payload;
    },
  },
});

export const { changeCurrencyFormat } = currencySlice.actions;
export default currencySlice.reducer;
