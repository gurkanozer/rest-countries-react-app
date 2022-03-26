import React from 'react';
import {HeaderContainer, HeaderInner, Title} from './style';
import {ThemeSwitch} from '../../components';
const Header = ({handleTheme}) => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <Title>Where in the world?</Title>
        <ThemeSwitch onClick={handleTheme}/>
      </HeaderInner>
    </HeaderContainer>
  )
}

export default Header