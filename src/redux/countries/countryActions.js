import { SET_COUNTRIES, SET_CURRENT_COUNTRY } from "./countryActionTypes";

export const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries,
});

export const setCurrentCountry = (country) => ({
    type: SET_CURRENT_COUNTRY,
    payload: country,
  });
