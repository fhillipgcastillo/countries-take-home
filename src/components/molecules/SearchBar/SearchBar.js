import React from "react";
import { SearchBarWrapper, SearchInput, SearchIcon } from "./SearchBar.style";

const SearchBar = ({searchCountry, onChange}) => {
  return (
    <SearchBarWrapper>
      <SearchIcon>Search</SearchIcon>
      <SearchInput
        value={searchCountry}
        onChange={onChange}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
