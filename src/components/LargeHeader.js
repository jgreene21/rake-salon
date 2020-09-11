import React from "react";
import { Image, Grid, Header} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import Instagram from "../images/Instagram.svg";
import Facebook from "../images/Facebook.svg";
import Contact from "../images/Contact.svg";
import Appointment from "../images/Appointment.png";

class LargeHeader extends React.Component {
  render() {
    return (
      <>
    <Grid centered columns={4}>
      <Grid.Column width={3} style={{marginTop: "20px"}}>
     
      </Grid.Column>
      <Grid.Column width={6} >
        <Link to="/">
        <Image src={Logo} style={{marginLeft: "10%"}}/>
        </Link>
        </Grid.Column>
      <Grid.Column width={4} verticalAlign='bottom' >
        <Image.Group>
          <a href= "https://www.instagram.com/rakesalon/"><Image src={Instagram} /></a>
          <a href= "https://www.facebook.com/rakesalon"><Image src={Facebook} /></a>
          <Image src={Contact}  />
        </Image.Group>
        </Grid.Column>
    </Grid>
   </>
    )
  }
};

export default LargeHeader; 