import { createSlice } from "@reduxjs/toolkit";

const initialCurrencyState = {
  symbol: "$",
  currencies: null,
};

const currencySlice = createSlice({
  name: "currency",
  initialState: initialCurrencyState,
  reducers: {
    getCurrencies(state, { payload }) {
      state.currencies = payload;
    },
    changeCurrencyFormat(state, { payload }) {
      state.symbol = payload;
    },
  },
});

export const { changeCurrencyFormat, getCurrencies } = currencySlice.actions;
export default currencySlice.reducer;
