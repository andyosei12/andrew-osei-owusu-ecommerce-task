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
export const selectCartOpen = createSelector([selectUi], (ui) => ui.isCartOpen);
export const selectCurrencyDropdownOpen = createSelector(
  [selectUi],
  (ui) => ui.isCurrencySwitchDropdownOpen
);

//cart selectors
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartTotal = createSelector(
  [selectCurrencySymbol, selectCartItems],
  (currency, cartItems) =>
    cartItems.reduce((acc, cartItem) => {
      return (
        acc +
        cartItem.quantity *
          cartItem.productInfo.prices.find(
            (price) => price.currency.symbol === currency
          ).amount
      );
    }, 0)
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
