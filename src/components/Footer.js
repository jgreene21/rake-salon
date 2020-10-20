import React from "react";
import { Segment, Image, List, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Logo2 from "../images/Logo2.png";
import Instagram2 from "../images/Instagram2.svg";
import Facebook2 from "../images/Facebook2.svg"
import MessageMe from "./MessageMe";
import styled from "styled-components";


function Footer () {
  
  return(
  <> 
  <Segment inverted style={{borderRadius: "0px", backgroundColor: "#2B2828"}}>
  <Grid verticalAlign='middle' columns={3} centered>
      <Grid.Column width={4}>
          <Link to="/">
          <Image src={Logo2} />
          </Link>
      </Grid.Column>
      <Grid.Column width={6}>
        <List >
          <Link to= "/ourstory" style={{color: "#f4f4f4"}}><FooterItems as={List.Item} style={{marginBottom: "2%"}}>Our Story</FooterItems></Link>
          <Link to= "/ourstylists" style={{color: "#f4f4f4"}}><FooterItems as={List.Item} style={{marginBottom: "2%"}}>Our Stylists</FooterItems></Link>
          <Link to= "/ourservices" style={{color: "#f4f4f4"}}><FooterItems as={List.Item}style={{marginBottom: "2%"}}>Our Services</FooterItems></Link>
          <Link to= "/ourproducts" style={{color: "#f4f4f4"}}><FooterItems as={List.Item}>Our Products</FooterItems></Link>
        </List>
      </Grid.Column>
      <Grid.Column width={4}>
        <List >
        <a href="https://www.google.com/maps/dir/40.730624,-111.8437376/rake+salon+brentwood/@39.4147769,-121.2905381,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x808ffe9506e55d81:0x6162b1d01462b8fb!2m2!1d-121.6943776!2d37.9326443" style={{color: "#f4f4f4"}}>
          <FooterItems as={List.Item} >240 Oak St</FooterItems>
          <FooterItems as={List.Item} >Brentwood, Ca</FooterItems>
          <FooterItems2 as={List.Item} >94513</FooterItems2>
          </a>
        <a href= "tel: 9253928475" style={{color: "#f4f4f4"}}>
          <FooterItems2 as={List.Item}>(925) 392-8475</FooterItems2>
          </a>
        </List>
        <Image.Group>
          <a href= "https://www.instagram.com/rakesalon/"><Social as={Image} src={Instagram2} /></a>
          <a href= "https://www.facebook.com/rakesalon"><Social as={Image} src={Facebook2} style={{marginRight: "3%", marginLeft: "3%"}}/></a>
          <MessageMe />
        </Image.Group>
      </Grid.Column>
  </Grid>
  </Segment>
  </>
  )
  };
  
  const Social = styled.p`{
    @media(max-width: 700px) {
      height: 15px;
      width: 15px;
      }
  }
  `

  const FooterItems = styled.p`{
    font-family: Playfair Display;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    @media(max-width: 700px) {
      font-size: 10px
      }
  }
  `

  const FooterItems2 = styled.p`{
    font-family: Playfair Display;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    margin-bottom: 7%;
    @media(max-width: 700px) {
      font-size: 10px
      margin-bottom: 5%;
      }
  }
  `
  export default Footer;