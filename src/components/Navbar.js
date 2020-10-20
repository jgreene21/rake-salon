import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react';
import {  withRouter, } from 'react-router-dom';
import styled from "styled-components";

class Navbar extends React.Component {
  
  render() {
    return (
     <Menu borderless fluid widths={6} style={{ border: "none"}}>
       <NavItems as={Menu.Item}
         href= "/"
         name= "Home"
       />
       <NavItems as={Menu.Item}
         href= "/ourstory"
         name= "About Rake Salon"
       />
       <NavItems as={Menu.Item}
        href= "/ourstylists"
         name= "Meet Our Stylists"
       />
       <NavItems as={Menu.Item}
       href= "/ourservices"
         name= "Menu of Services"
       />
       <NavItems as={Menu.Item}
       href=  "/ourproducts"
         name= "Our Products"
      />
     </Menu>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
};

const NavItems = styled.p`{
  font-family: Playfair Display;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  text-align: center;
  @media(max-width: 700px) {
    font-size: 8px
    }
}
`

export default withRouter(ConnectedNavbar);