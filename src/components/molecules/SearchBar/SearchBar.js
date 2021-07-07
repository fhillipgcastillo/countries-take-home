import React, { useState, useEffect } from "react";
import { SearchBarWrapper, SearchInput, SearchIcon, Clear } from "./SearchBar.style";

const SearchBar = ({search, onChange, onClear=null}) => {
  const [showClear, setShowClear] = useState(false);

  useEffect(()=>{
    if(search) {
      setShowClear(true);
    } else {
      setShowClear(false);
    }
  }, [search])

  return (
    <SearchBarWrapper>
      <SearchIcon>Search</SearchIcon>
      <SearchInput
        value={search}
        onChange={onChange}
      />
      
        {showClear && <Clear onClick={ onClear}>x</Clear>}
      
    </SearchBarWrapper>
  );
};

export default SearchBar;
