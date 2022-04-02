import React from "react";

import { ListContainer, ListItemContainer } from "./style";
import { Card } from "../../components";

const List = ({ countries, setSelectedCountry }) => {
  return (
    <ListContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {countries?.map((country, index) => (
        <ListItemContainer layout key={index}>
          <Card item={country} onClick={setSelectedCountry} />
        </ListItemContainer>
      ))}
    </ListContainer>
  );
};

export default List;
