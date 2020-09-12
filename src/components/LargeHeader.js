import React from "react";
import { Image, Grid, Header } from "semantic-ui-react";
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
          <Grid.Column width={3} verticalAlign="bottom">
            <a
              target="_top"
              style={style.button}
              href="https://squareup.com/appointments/buyer/widget/tf0dwkuv2h5a71/QPQYCW64FC4N9"
            >
              Appointments
            </a>
          </Grid.Column>
          <Grid.Column width={6}>
            <Link to="/">
              <Image src={Logo} style={{ marginLeft: "10%" }} />
            </Link>
          </Grid.Column>
          <Grid.Column width={4} verticalAlign="bottom">
            <Image.Group>
              <a href="https://www.instagram.com/rakesalon/">
                <Image src={Instagram} />
              </a>
              <a href="https://www.facebook.com/rakesalon">
                <Image src={Facebook} />
              </a>
              <Image src={Contact} />
            </Image.Group>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

const style = {
  button: {
    backgroundColor: "#2B2828",
    color: "#F4F4F4",
    height: "30px",
    textTransform: "uppercase",
    fontFamily: "Helvetica Neue",
    letterSpacing: "1px",
    padding: "5px 20px",
    borderRadius: "3px",
    fontWeight: "300",
    fontSize: "12px",
    cursor: "pointer",
    display: "inline-block",
  },
};

export default LargeHeader;
