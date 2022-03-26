import React, { useState } from 'react';
import {SearchContainer, SearchInput, SearchIcon} from './style';

const SearchBox = ({keyWord, setKeyWord}) => {
  const [value, setValue] = useState(keyWord);
  const handleChange = (e) => {
    setKeyWord(e.target.value);
    setValue(e.target.value);
  }
  return (
    <SearchContainer>
      <SearchInput onChange={(e)=>handleChange(e)} value={value} placeholder='Search for a country...'/>
      <SearchIcon/>
    </SearchContainer>
  )
}

export default SearchBox