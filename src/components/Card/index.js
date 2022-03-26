import React from 'react';
import { CardContainer, CardHeader, CardBody, Flag, Title, List, Item, Strong, Paragraph } from './style';

const Card = ({item,onClick}) => {
  
  return (
    <CardContainer 
      onClick={()=>onClick(item)}
      initial={{ scale:0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      <CardHeader>
        <Flag src={item.flags.png} />
      </CardHeader>
      <CardBody>
        <Title>{item.name}</Title>
        <List>
          <Item><Paragraph><Strong>Population:</Strong>{item.population}</Paragraph></Item>
          <Item><Paragraph><Strong>Region:</Strong>{item.region}</Paragraph></Item>
          <Item><Paragraph><Strong>Capital:</Strong>{item.capital}</Paragraph></Item>
        </List>
      </CardBody>
    </CardContainer>
  )
}

export default Card