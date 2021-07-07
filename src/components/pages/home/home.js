import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../../services/api';
import { setCountries } from '../../../redux/countries/countryActions';
import CountryCard from '../../molecules/CountryCard';
import { CountryContainer, Title } from './home.style';
import SearchBar from '../../molecules/SearchBar/SearchBar';

const Home = () => {
  // const [countries, setCounties] = useState([]);
  const [searchCountry, setSearchCountry ] = useState(null);
  const dispatch = useDispatch();
  const countries = useSelector(state => state.country && state.country.countries);

  useEffect(() => {
    getCountries()
      .then(res => dispatch(setCountries(res)));
  }, [countries]);

  return (
    <div>
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