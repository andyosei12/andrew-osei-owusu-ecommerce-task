import { combineReducers } from "redux";
import currencyReducer from "./currency-slice";
import cartReducer from "./cart-slice";
import uiReducer from "./ui-slice";

const rootReducer = combineReducers({
  currency: currencyReducer,
  cart: cartReducer,
  ui: uiReducer,
});

export default rootReducer;
