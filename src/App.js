import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyle";
import { useCountries } from "./hooks";
//COMPONENTS
import { Header, List, Navbar, Loading, Detail } from "./layers";
//STYLED COMPONENT
const Main = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1328px;
  margin: 0 auto;
  margin-bottom: 48px;
  padding: 0 16px;
`;

const App = () => {
  const { countries, filteredCountries, filter } = useCountries();
  const [filters, setFilters] = useState({
    region: 0,
    keyWord: "",
  });
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [darkTheme, setDarkTheme] = useState(false);
  const themes ={ 
    light:{
    name: "light",
    color: {
        text: "hsl(200, 15%, 8%)",
        input: "hsl(0, 0%, 52%)",
        background: " hsl(0, 0%, 98%)",
        element: " hsl(0, 0%, 100%)",
      },
    },
    dark:{
      name:"dark",
      color:{
        text:"hsl(0, 0%, 100%)",
        input:"hsl(209, 23%, 22%)",
        background: "hsl(207, 26%, 17%)",
        element: "hsl(209, 23%, 22%)",
      }
    }
  };

  const handleSelectedRegion = (region) => {
    setFilters((f) => ({ ...f, region }));
    filter(filters.keyWord, region);
  };
  const handleKeyWord = (keyWord) => {
    setFilters((f) => ({ ...f, keyWord }));
    filter(keyWord, filters.region);
  };
  const handleDarkTheme = () =>{
    setDarkTheme(dt=>(!dt));
  }
  if (countries.length === 0)
    return (
      <ThemeProvider theme={darkTheme ? themes.dark : themes.light}>
        <GlobalStyle />
        <Loading />
      </ThemeProvider>
    );

  return (
    <ThemeProvider theme={darkTheme ? themes.dark : themes.light}>
      <GlobalStyle />
      <Header handleTheme={handleDarkTheme} />
      <Navbar
        closeDetail = {()=>setSelectedCountry(null)}
        keyWord={filters.keyWord}
        selectedCountry = {selectedCountry}
        setKeyWord={handleKeyWord}
        selectedRegion={filters.region}
        setSelectedRegion={handleSelectedRegion}
      />
      <Main>
        {selectedCountry !== null ? (
          <Detail item={selectedCountry} />
        ) : (
          <List countries={filteredCountries} setSelectedCountry={setSelectedCountry}/>
        )}
      </Main>
    </ThemeProvider>
  );
};

export default App;
