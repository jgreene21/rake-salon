import React from "react";
import { Image,} from "semantic-ui-react";
import Menu from "../images/Menu.svg";

const Services = () => (
  <>
    <Image src={Menu} centered />
    <div style={{ textAlign: "center" }}>
      <a
        target="_top"
        style={style.button}
        href="https://squareup.com/appointments/buyer/widget/tf0dwkuv2h5a71/QPQYCW64FC4N9"
      >
        Book an Appointment
      </a>
    </div>
  </>
);

const style = {
  button: {
    backgroundColor: "#2B2828",
    color: "#F4F4F4",
    height: "40px",
    textTransform: "uppercase",
    fontFamily: "Helvetica Neue",
    letterSpacing: "1px",
    lineHeight: "38px",
    padding: "0 28px",
    borderRadius: "3px",
    fontWeight: "normal",
    fontSize: "14px",
    cursor: "pointer",
    display: "inline-block",
    marginBottom: "30px",
  },
};

export default Services;
