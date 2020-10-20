import React from "react";
import { Link } from "react-router-dom";
import { Container, Image, Button, Segment } from "semantic-ui-react";
import BadLink from "../images/BadLink.png";
import styled from "styled-components";

const NoMatch = () => (
  <>
    <Container style={{marginTop: "50px", marginBottom: "50px"}}>
      <Image src={BadLink} centered size="large"/>
      <Segment basic textAlign= "center" style={{marginLeft: "20vw", marginRight: "20vw"}}>
      <BadHair>
        A broken link is like a Bad Hair Day!
        But just go back to our homepage and we can help you out with both.
      </BadHair>
      <br />
      <Button style={style.button}>
        <Link to="/" style={{color: "#f4f4f4"}}> <Home>HOME</Home></Link>
      </Button>
      </Segment>
    </Container>
  </>
);
const BadHair = styled.p`{
  font-family: Playfair Display;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  @media(max-width: 700px) {
    font-size: 16px
    }
}
`
const Home = styled.p`{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  color: #f4f4f4 !important
  @media(max-width: 700px) {
    font-size: 18px;
    }
}
`
const style = {
  button: {
    width: "200px",
    height: "50px",
    background: "#A9BBCA",
    borderRadius: "10px",
  },
};
export default NoMatch;
