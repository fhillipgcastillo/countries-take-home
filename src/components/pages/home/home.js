import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../../services/api';
import { setCountries } from '../../../redux/countries/countryActions';
import CountryCard from '../../molecules/CountryCard';
import { CountryContainer, Title } from './home.style';
import SearchBar from '../../molecules/SearchBar/SearchBar';

const Home = () => {
  const [searchCountry, setSearchCountry ] = useState("");
  const dispatch = useDispatch();
  const countries = useSelector(state => state.country && state.country.countries);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    getCountries()
      .then(res => dispatch(setCountries(res)));
  }, []);

  useEffect(() => {
    if(searchCountry) {
      setFilteredCountries(countries && countries.filter(country => country.name.toLocaleLowerCase().includes(searchCountry.toLocaleLowerCase())))
    } else {
      setFilteredCountries(countries);
    }
  }, [countries, searchCountry]);

  const handleSearch = e => setSearchCountry(e.target.value);
  const handleClearSearch = ()=> setSearchCountry("");

  return (
    <div>
      <SearchBar search={searchCountry} onChange={handleSearch} onClear={handleClearSearch} />
      <CountryContainer>
        {
          filteredCountries && filteredCountries.map(country => <CountryCard key={country.name} country={country} />)
        }
      </CountryContainer>
    </div>
  )
};

export default Home;