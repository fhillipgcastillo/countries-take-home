import { SET_COUNTRIES, SET_CURRENT_COUNTRY } from "./countryActionTypes";

export default function CountryReducer(state={}, action){
  switch( action.type) {
    case SET_COUNTRIES:
      return {...state, countries: action.payload};
    case SET_CURRENT_COUNTRY:
      return {...state, country: action.payload};
    default:
      return state;
  }
}
