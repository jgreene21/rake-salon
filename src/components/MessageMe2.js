import React from 'react';
import {Image, Modal,} from 'semantic-ui-react';
import ContactForm from "./ContactForm";
import Contact from "../images/Contact.svg";
import Floral from "../images/Floral.svg";
import styled from "styled-components";

function MessageMe() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal style={style.contact}
      closeIcon 
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Social as={Image} src={Contact} centered style={{ cursor: "pointer"}} />}
    >
      <Image src= {Floral} centered size="small"/>
      <ContactForm />
    </Modal>
  )
};

const style = {
  contact: {
    borderRadius: "0",
  },
};

const Social = styled.p`{
  @media(max-width: 700px) {
    height: 17px;
    width: 17px;
    }
}
`

export default MessageMe;