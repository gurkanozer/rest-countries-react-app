import React from "react";
import {
  CardContainer,
  CardHeader,
  CardBody,
  Flag,
  Title,
  List,
  Item,
  Strong,
  Paragraph,
} from "./style";

const Card = ({ item, onClick }) => {
  return (
    <CardContainer layout onClick={() => onClick(item)} whileHover={{ y: -10 }}>
      <CardHeader>
        <Flag src={item.flags.png} />
      </CardHeader>
      <CardBody>
        <Title>{item.name}</Title>
        <List>
          <Item>
            <Paragraph>
              <Strong>Population:</Strong>
              {item.population}
            </Paragraph>
          </Item>
          <Item>
            <Paragraph>
              <Strong>Region:</Strong>
              {item.region}
            </Paragraph>
          </Item>
          <Item>
            <Paragraph>
              <Strong>Capital:</Strong>
              {item.capital}
            </Paragraph>
          </Item>
        </List>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
