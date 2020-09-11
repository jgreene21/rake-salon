import React from 'react';
import { Header, Segment, Image, Grid } from 'semantic-ui-react';
import styled from "styled-components";
import Open from "../images/Open.png";
import ScrollingWrapper from './ScrollingWrapper';
import Gallery from "../images/Gallery.svg";

const Home = () => (
  <>
 
  <Segment placeholder fluid inverted style={{background: "#99B5CC", borderRadius: "0px"}}>
  <Grid centered columns={4}>
      <Grid.Row verticalAlign='middle'>
        <Grid.Column width={6}>
          <p>
          Here we go again! We will officially be REOPENING our doors (for all your indoor services!) this Monday, August 31st. All COVID safety protocols remain in place as we continue to do our best to provide a safe and healthy environment for all of our guests and staff. 
          </p>
          <p>We thank you again for all of your support through these challenging times and can not wait to see you soon.</p>
        </Grid.Column>
        <Grid.Column>
          <ImageHolder as={Image} src ={Open} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  <Image src={Gallery} centered />
  
  </>
);


const ImageHolder = styled.div`{
  margin-top: -30px;
  margin-left: 75px;
  width: 300px;
  @media(max-width: 1000px) {
    margin-top: 10px;
    width: 150px;
    }
}
`

export default Home;