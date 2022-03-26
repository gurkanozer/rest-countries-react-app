import React  from 'react';

import {ListContainer, ListItemContainer} from './style';
import {Card} from '../../components';

const List = ({countries, setSelectedCountry}) => {
  return (
    <ListContainer
    >
      {
        countries?.map((country, index)=>(
          <ListItemContainer key={index}>
            <Card 
              item={country} 
              onClick={setSelectedCountry}
              />
          </ListItemContainer>
        ))
      }
    </ListContainer>
  )
}

export default List