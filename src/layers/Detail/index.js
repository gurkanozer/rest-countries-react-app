import React from "react";
import {
  Container,
  ImageContainer,
  Image,
  ContentContainer,
  FlexContainer,
  InfoContainer,
  BorderContainer,
  Title,
  Paragraph,
  Strong,
  Tag,
  ButtonGroup
} from "./style";
import {Button} from "../../components";
const Detail = ({ item }) => {
  console.log(item);
  return (
    <Container>
      <ImageContainer 
        initial={{y:200, opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.4}}
      >
        <Image src={item.flag} />
      </ImageContainer>
      <ContentContainer>
        <Title
          initial={{x:200, opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.4}}
        >{item.name}</Title>
          <FlexContainer>
            <InfoContainer
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.8}}
            >
              <Paragraph>
                <Strong>Native Name:</Strong>
                {item.nativeName}
              </Paragraph>
              <Paragraph>
                <Strong>Population:</Strong>
                {item.population}
              </Paragraph>
              <Paragraph>
                <Strong>Region:</Strong>
                {item.region}
              </Paragraph>
              <Paragraph>
                <Strong>Sub Region:</Strong>
                {item.subRegion}
              </Paragraph>
              <Paragraph>
                <Strong>Capital:</Strong>
                {item.capital}
              </Paragraph>
            </InfoContainer>
            <InfoContainer>
              <Paragraph>
                <Strong>Top Level Domain:</Strong>
                {item?.topLevelDomain?.map((d) => d)}
              </Paragraph>
              <Paragraph>
                <Strong>Currencies:</Strong>
                {item?.currencies?.map((c,index) => <Tag key={index}>{c.name}</Tag>)}
              </Paragraph>
              <Paragraph>
                <Strong>Languages:</Strong>
                {item?.languages?.map((l,index) => <Tag key={index}>{l.name}</Tag>)}
              </Paragraph>
            </InfoContainer>
          </FlexContainer>
       {
         item?.borders &&
         <BorderContainer>
         <Paragraph><Strong>Border Countries:</Strong></Paragraph>
         <ButtonGroup>
             {
               item?.borders?.map((b,index) =>
                <Button sm={true} key={index}>{b}</Button>
              )
             }
         </ButtonGroup>
       </BorderContainer>
       }
      </ContentContainer>
    </Container>
  );
};

export default Detail;
