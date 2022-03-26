import React from 'react';
import {Container, Checkbox, Icon} from './style';
const ThemeSwitch = ({isActive, onClick}) => {
  
  return (
    <Container>Dark Theme
      <Checkbox checked={isActive} onClick={onClick}/>
      <Icon/>
    </Container>
  )
}

export default ThemeSwitch