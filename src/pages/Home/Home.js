import React from "react";
import BackgroundImage from "../../assets/images/background.png";
import { Image, Header, Section, Container, Box, SectionBox } from "./Home.styled";
import Button from "../../components/Button";

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
    </Box>
  );
};

export default Home;
