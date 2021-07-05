import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  padding: 15px;
  flex: 1;
  width: 35%;
  border-radius: 10px;
  box-shadow: -3px 4px 13px 3px #83759e52;
  margin-left: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  font-size: 20px;
  border-left: 1px solid black;
  margin: auto 10px;

  &:focus,
  &:focus-visible {
    outline: none;
    border-left: none;
    padding-left: 0px;
  }
`;

export const SearchIcon = styled.i`
  &:before {
    content:"\\1F50E";
  }
`;
