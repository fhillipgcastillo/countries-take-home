import { combineReducers } from "redux";
import CountryReducer from "./countries/countryReducers";

const rootReducer = combineReducers({country: CountryReducer});
export default rootReducer;
