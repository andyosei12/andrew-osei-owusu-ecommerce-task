import { combineReducers } from "redux";
import currencyReducer from "./currency-slice";
import cartReducer from "./cart-slice";

const rootReducer = combineReducers({
  currency: currencyReducer,
  cart: cartReducer,
});

export default rootReducer;
