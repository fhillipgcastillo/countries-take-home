import React, { Component } from 'react'
import { CountryCardWrapper, Flag, FlagWrapper, Name } from './countryCardStyled';

const CountryCard = ({country})=>{

  return <CountryCardWrapper to={`/coutry/${country.name}`}>
    <FlagWrapper>
      <Flag src={country.flag}/>
    </FlagWrapper>
    <Name>{country.name}</Name>
  </CountryCardWrapper>
};

export default CountryCard;