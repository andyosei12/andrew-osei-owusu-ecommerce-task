import { createSelector } from "reselect";

//input selectors

const selectCurrency = (state) => state.currency;
const selectUi = (state) => state.ui;
const selectCart = (state) => state.cart;

// ourput selectors
export const selectCurrencySymbol = createSelector(
  [selectCurrency],
  (currency) => currency.symbol
);

//ui selectors
export const selectCartOpen = createSelector([selectUi], (ui) => ui.cartOpen);

//cart selectors
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
