import React from "react";
import BackgroundImage from "../../assets/images/background.png";
import {
  Image,
  Header,
  Section,
  Container,
  Box,
  SectionBox,
  Article,
  Content,
  ArticleImage
} from "./Home.styled";
import Button from "../../components/Button";
import ManImage from '../../assets/images/man.png';
import WomanImage from '../../assets/images/woman.png';

const Home = () => {
  return (
    <Box>
      <Header>
        <Image src={BackgroundImage} />
        <Container>
          <h1>
            Quick and hassle-<br></br>free shopping
          </h1>
          <Button text="Shop now" />
        </Container>
      </Header>
      <Section>
        <SectionBox>
          <h2>An extension of your closet</h2>
          <p>
            Mintmade Fashion offers same-day or next-day delivery within our
            service areas. Mintmade Fashion offers same-day or next-day delivery
            within our service areas.
          </p>
        </SectionBox>
      </Section>
      <Article>
        <Content>
          <h2>Clothes for Him</h2>
          <p>Look dashing while on the go with our casual wear items.</p>
          <Button text="Shop now" />
        </Content>
        <ArticleImage>
          <img src={ManImage} alt="" />
        </ArticleImage>
      </Article>
      <Article secondary>
        <Content>
          <h2>Clothes for Her</h2>
          <p>Look dashing while on the go with our casual wear items.</p>
          <Button text="Shop now" />
        </Content>
        <ArticleImage>
          <img src={WomanImage} alt="" />
        </ArticleImage>
      </Article>
    </Box>
  );
};

export default Home;
