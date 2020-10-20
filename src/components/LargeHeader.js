import React from "react";
import { Image, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import Instagram from "../images/Instagram.svg";
import Facebook from "../images/Facebook.svg";
import MessageMe2 from "./MessageMe2";
import styled from "styled-components";

class LargeHeader extends React.Component {
  render() {
    return (
      <>
        <Grid centered columns={4}>
          <Grid.Column width={3} verticalAlign="bottom">
         
          </Grid.Column>
          <Grid.Column width={6}>
            <Link to="/">
              <Image src={Logo} style={{ marginLeft: "10%" }} />
            </Link>
          </Grid.Column>
          <Grid.Column width={4} verticalAlign="bottom">
            <Image.Group>
              <a href="https://www.instagram.com/rakesalon/">
                <Social as={Image} src={Instagram} />
              </a>
              <a href="https://www.facebook.com/rakesalon">
                <Social as={Image} src={Facebook} />
              </a>
              <MessageMe2 />
            </Image.Group>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

const Social = styled.p`{
  @media(max-width: 700px) {
    height: 17px;
    width: 17px;
    }
}
`
export default LargeHeader;
