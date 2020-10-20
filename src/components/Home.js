import React from "react";
import { Segment, Image, Grid, } from "semantic-ui-react";
import styled from "styled-components";
import Open from "../images/Open.png";
import Gallery from "./Gallery.js";


const Home = () => (
  <>
    <Segment
      placeholder
      fluid
      inverted
      style={{ background: "#99B5CC", borderRadius: "0px" }}
    >
      <Grid stackable centered columns={4}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column width={5}>
            <Message>
              Here we go again! We officially REOPENED our doors (for all your
              indoor services!) on Monday, August 31st. All COVID safety
              protocols remain in place as we continue to do our best to provide
              a safe and healthy environment for all of our guests and staff.
            </Message>
            <br />
            <Message>
              We thank you again for all of your support through these
              challenging times and can not wait to see you soon.
            </Message>
          </Grid.Column>
          <Grid.Column>
            <ImageHolder as={Image} src={Open} centered/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
      <div style={{marginTop: "2%", marginBottom: "5%"}}>
        <Heading>Client Gallery</Heading>
    <Gallery />
    </div>
    <Heading>what they're saying . . .</Heading>
    <iframe 
    width= "100%"
    height= "480px"
    border= "none"
    boxShadow= "none"
    src="https://apps.elfsight.com/widget/82d91886-c0da-49d3-98c3-7adf44b24f62">
    </iframe>
  </>
);

const ImageHolder = styled.div`
   {
    margin-top: -30px;
    margin-left: 75px;
    width: 300px;
    @media (max-width: 1000px) {
      width: 200px;
    }
  }
`;

const Message = styled.div`
   {
    font-size: 16px;
    @media (max-width: 700px) {
      margin: 0 auto;
      width: 85%;
      font-size: 14px;
    }
  }
`;

const Heading = styled.div`
   {
    font-family: Playfair Display;
    font-style: italic;
    font-weight: normal;
    font-size: 36px;
    line-height: 80px;
    text-align: center;
    color: ##2B2828
    @media (max-width: 700px) {
      font-size: 28px;
    }
  }
`;

export default Home;
