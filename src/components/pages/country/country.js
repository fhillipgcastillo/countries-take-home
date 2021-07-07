import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentCountry } from "../../../redux/countries/countryActions";
import { getCountryByName } from "../../../services/api";
import {
  CountryContainer,
  CountryImage,
  CountryImageContainer,
  CountryInformationContainer,
  CountryInformationItem,
  GoBackButton,
  CountryDetailsContainer,
} from "./country.style";

const Country = (props) => {
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const country = useSelector(
    (state) => state.country && state.country.country
  );

  useEffect(() => {
    const { match } = props;
    setloading(true);
    const countryName = match.params.countryName.trim().replace("_", " ");
    getCountryByName(countryName)
      .then(
        (countryResponse) =>
          dispatch(
            setCurrentCountry(
              countryResponse.find((c) => c.name === countryName)
            )
          ) && setloading(false)
      )
      .catch((err) => console.log(err));
  }, []);

  const handleGoBack = ()=>{
    const { history } = props;
    history.goBack();
  };

  if (loading) {
    return <h3>Loading...</h3>;
  }
  
  return (
    <CountryContainer>
      <GoBackButton onClick={handleGoBack}>Go Back</GoBackButton>
      {country && (
        <CountryDetailsContainer className="country-container">
          <CountryImageContainer className="country-flag-wrapper">
            <CountryImage src={country.flag} />
          </CountryImageContainer>
          <CountryInformationContainer className="country-details">
            <CountryInformationItem className="population">
              <strong>Population:</strong> {country.population.toLocaleString()}{" "}
              people
            </CountryInformationItem>
            <CountryInformationItem className="region">
              <strong>Region:</strong> {country.region}
            </CountryInformationItem>
            <CountryInformationItem className="capital">
              <strong>Capital:</strong> {country.capital}
            </CountryInformationItem>
            <CountryInformationItem className="capital">
              <strong>Languages:</strong>{" "}
              {country.languages.map((l) => l.name).join(", ")}
            </CountryInformationItem>
          </CountryInformationContainer>
        </CountryDetailsContainer>
      )}
    </CountryContainer>
  );
};

export default Country;
