import styled from "styled-components";
import { Link } from "react-router-dom";

export const CountryCardWrapper = styled(Link)`
  flex: 1;
  flex-basis: 25%;
  padding: 15px;
  margin: 15px;
  flex-direction: column;
  justify-content: center;
  background-color: #f8f8f840;
  box-shadow: -3px 4px 13px 3px #83759e52;
  border-radius: 10px;
  text-decoration: none;
`;

export const FlagWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

export const Flag = styled.img`
  width: 100%;
`;

export const Name = styled.h2`
  color: #19407beb;
`;
