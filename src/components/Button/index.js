import React from 'react';
import { Input } from './style';
const Button = ({onClick, children, sm=false}) => {
  return (
    <Input onClick={onClick} sm={sm}>{children}</Input>
  )
}

export default Button