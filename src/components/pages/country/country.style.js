import styled from "styled-components";

export const CountryDetailsContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: auto;
  max-width: 500px;
`;

export const CountryImageContainer = styled.div``;
export const CountryImage = styled.img`
  width: 100%;
`;
export const CountryInformationContainer = styled.div`
  display: flex;
  flex-flow: raw;
  flex: 1;
  width: 100%;
  text-align: center;
  flex-wrap: wrap;
`;

export const CountryInformationItem = styled.p`
  width: 50%;
  flex: 1;
  flex-basis: 50%;
`;

export const GoBackButton = styled.button`
  padding: 15px;
  background-color: #f8f8f840;
  box-shadow: -3px 4px 13px 3px #83759e52;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: #2b4f85;
    color: white;
    cursor: pointer;
  }
`;

export const CountryContainer = styled.div`
  padding: 15px;
`;
