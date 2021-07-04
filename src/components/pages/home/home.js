import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../../services/api';
import { setCountries } from '../../../redux/countries/countryActions';
import CountryCard from '../../molecules/CountryCard';
import { CountryContainer, Title } from './homeStyled';

const Home = () => {
  // const [countries, setCounties] = useState([]);
  const countries = useSelector(state => state.country.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    getCountries()
      .then(res => dispatch(setCountries(res)));
  }, []);

  useEffect(()=> {
    console.log(countries);
  }, countries);

  return (
    <div>
      <Title>Countries</Title>
      <CountryContainer>
        {
          countries && countries.map(country => <CountryCard key={country.name} country={country} />)
        }
      </CountryContainer>
    </div>
  )
};

export default Home;