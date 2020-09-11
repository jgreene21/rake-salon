import React from 'react';
import { Header, Segment, Image, Grid } from 'semantic-ui-react';
import styled from "styled-components";
import Open from "../images/Open.png";
import ScrollingWrapper from './ScrollingWrapper';

const Home = () => (
  <>
  <Header as="h3" textAlign="center"></Header>
  <div style={{marginTop: "150px", marginBottom: "200px"}}>
  <Segment placeholder fluid inverted style={{background: "#99B5CC", borderRadius: "0px"}}>
  <Grid columns={2} stackable textAlign='center'>
      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header>
            We are so excited to have our doors open again! 
          </Header>
        </Grid.Column>
        <Grid.Column>
          <ImageHolder as={Image} src ={Open} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  </div>
  </>
);


const ImageHolder = styled.div`{
  margin-top: -30px;
  margin-left: 75px;
  width: 400px;
  @media(max-width: 1000px) {
    margin-top: 10px;
    width: 200px;
    }
}
`

export default Home;