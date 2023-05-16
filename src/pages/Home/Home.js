import React from "react";
import BackgroundImage from "../../assets/images/background.png";
import { Background, Image, Header } from "./Home.styled";
import Button from '../../components/Button';

const Home = () => {
  return (
    <>
      <Background>
        <Image src={BackgroundImage} />
      </Background>
      <Header>
        <h1>Quick and hassle-<br></br>free shopping</h1>
        <Button text="Shop now" />
      </Header>
    </>
  );
};

export default Home;
