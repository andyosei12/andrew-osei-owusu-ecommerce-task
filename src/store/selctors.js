import { createSelector } from "reselect";

//input selectors

const selectCurrency = (state) => state.currency;

// ourput selectors
export const selectCurrencySymbol = createSelector(
  [selectCurrency],
  (currency) => currency.symbol
);
