import { SET_COUNTRIES } from "./countryActionTypes";

export default function CountryReducer(state={}, action){
  switch( action.type) {
    case SET_COUNTRIES:
      return {...state, countries: action.payload};
    default:
      return state;
  }
}
