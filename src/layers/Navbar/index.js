import React from "react";
import { NavbarContainer,Arrow } from "./style";
import { SearchBox, DropDown,Button } from "../../components";
import {useOptionsList} from "../../hooks";

const Navbar = ({selectedRegion, setSelectedRegion,keyWord, setKeyWord, selectedCountry, closeDetail}) => {
  const {optionsList} = useOptionsList();
  
  return (
    <NavbarContainer>
      {selectedCountry ? (
        <Button onClick={closeDetail}><Arrow/> Back</Button>
      ) : (
        <>
          <SearchBox setKeyWord={setKeyWord} keyWord={keyWord}/>
          <DropDown
            optionsList={optionsList}
            selectedOption={selectedRegion}
            setSelectedOption={setSelectedRegion}
          />
        </>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
