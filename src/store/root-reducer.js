import { combineReducers } from "redux";
import currencyReducer from "./currency-slice";

const rootReducer = combineReducers({
  currency: currencyReducer,
});
export default rootReducer;
