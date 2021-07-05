import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../../services/api';
import { setCountries } from '../../../redux/countries/countryActions';
import CountryCard from '../../molecules/CountryCard';
import { CountryContainer, Title } from './home.style';
import SearchBar from '../../molecules/SearchBar/SearchBar';

const Home = () => {
  const [searchCountry, setSearchCountry ] = useState(null);
  const countries = useSelector(state => state.country.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    getCountries()
      .then(res => dispatch(setCountries(res)));
  }, []);

  return (
    <div>
      <Title>Discovering the World</Title>
      <SearchBar onChange={e => setSearchCountry(e.target.value)}/>
      <CountryContainer>
        {
          countries && countries.map(country => <CountryCard key={country.name} country={country} />)
        }
      </CountryContainer>
    </div>
  )
};

export default Home;