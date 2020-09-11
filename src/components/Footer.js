import React from "react";
import { Segment, Image, List, Grid } from "semantic-ui-react";
import styled from 'styled-components';
import Logo2 from "../images/Logo2.png"


function Footer () {
  
  return(
  <> 
  <Segment inverted style={{borderRadius: "0px", backgroundColor: "#2B2828"}}>
  <Grid verticalAlign='middle' columns={3} centered>
      <Grid.Column width={4}>
          <Image src={Logo2} />
      </Grid.Column>
      <Grid.Column width={6}>
        <List >
          <List.Item >Our Story</List.Item>
          <List.Item>Our Stylists</List.Item>
          <List.Item>Our Services</List.Item>
          <List.Item>Our Products</List.Item>
        </List>
      </Grid.Column>
      <Grid.Column width={4}>
        <List >
        {/* <a href="https://www.google.com/maps/dir/40.730624,-111.8437376/rake+salon+brentwood/@39.4147769,-121.2905381,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x808ffe9506e55d81:0x6162b1d01462b8fb!2m2!1d-121.6943776!2d37.9326443"> */}
          <List.Item >240 Oak St</List.Item>
          <List.Item >Brentwood, Ca</List.Item>
          <List.Item >94513</List.Item>
          {/* </a> */}
          <br/>
          <List.Item>(925) 240-7776</List.Item>
        </List>
      </Grid.Column>
  </Grid>
  </Segment>
  </>
  )
  };
  
  
  export default Footer;