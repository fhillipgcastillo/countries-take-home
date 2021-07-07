import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  padding: 15px;
  flex: 1;
  width: 35%;
  border-radius: 10px;
  box-shadow: -3px 4px 13px 3px #83759e52;
  margin-left: 10px;
  align-items: center;
  min-width: 240px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  font-size: 20px;
  margin: auto 10px;

  &:focus,
  &:focus-visible {
    outline: none;
    border-left: none;
    padding-left: 0px;
  }
`;

export const SearchIcon = styled.span`
  border-right: 1px solid 5858584d;
  padding-right: 10px;
`;

export const Clear = styled.button`
  padding: 5px;
  width: 38px;
  border: none;
  border-radius: 16px;
  box-shadow: -3px 2px 10px 0px #83759e52;
  background-color: white;
  cursor: pointer;
`;
