import React from "react";
import { Image, Grid, Header} from "semantic-ui-react";
import Logo from "../images/Logo.png"
import Instagram from "../images/Instagram.png";
import Facebook from "../images/Facebook.png";
import Contact from "../images/Contact.png";
import Appointment from "../images/Appointment.png";

class LargeHeader extends React.Component {
  render() {
    return (
      <>
    <Grid centered columns={3}>
      <Grid.Column width={3} style={{marginTop: "20px"}}>
     
      </Grid.Column>
      <Grid.Column width={6}>
        <Image src={Logo} />
        </Grid.Column>
      <Grid.Column width={3} style={{marginTop: "50px"}}>
        <Image.Group size="mini">
          <Image src={Instagram} />
          <Image src={Facebook} />
          <Image src={Contact} />
        </Image.Group>
        </Grid.Column>
    </Grid>
   </>
    )
  }
};

export default LargeHeader; 