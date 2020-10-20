import React from "react";
import { Grid, Image, Reveal } from "semantic-ui-react";
import One from "../images/1.png";
import Three from "../images/3.png";
import Four from "../images/4.png";
import Five from "../images/5.png";
import Six from "../images/6.png";
import Seven from "../images/7.png";
import Eight from "../images/8.png";
import Before from "../images/Before.png";
import After from "../images/After.png";
import Before2 from "../images/Before2.png";
import After2 from "../images/After2.png";
import Before3 from "../images/Before3.png";
import After3 from "../images/After3.png";
import Before4 from "../images/Before4.png";
import After4 from "../images/After4.png";
import Before5 from "../images/Before5.png";
import After5 from "../images/After5.png";
import Ten from "../images/10.png";
import TwentyTwo from "../images/22.png";
import TwentyOne from "../images/21.png";
import TwentyFour from "../images/24.png";
import Twenty from "../images/20.png";
import Eighteen from "../images/18.png";
import Nineteen from "../images/19.png";
import Seventeen from "../images/17.png";

const Gallery = () => (
  <>
  <div style={{width: "75vw", margin: "auto"}}>
  <Grid columns={5} style={{margin: "0 auto"}}>
      <Grid.Column>
        <Image src={One} style={{ height: "15vw", width: "20vw" }} />
      </Grid.Column>
      <Grid.Column>
        <Image src={TwentyOne} style={{ height: "15vw", width: "20vw" }} />
      </Grid.Column>
      <Grid.Column>
        <Reveal animated="move" style={{ cursor: "pointer" }}>
          <Reveal.Content visible>
            <Image src={After} style={{ height: "15vw", width: "20vw" }} />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src={Before} style={{ height: "15vw", width: "20vw" }} />
          </Reveal.Content>
        </Reveal>
      </Grid.Column>
      <Grid.Column>
        <Image src={Seventeen} style={{ height: "15vw", width: "20vw" }} />
      </Grid.Column>
      <Grid.Column>
        <Image src={Ten} style={{ height: "15vw", width: "20vw" }} />
      </Grid.Column>
  
      <Grid.Column>
        <Image src={Three} style={{ height: "15vw", width: "20vw" }} />
      </Grid.Column>
      <Grid.Column>
        <Image src={Four} style={{ height: "15vw", width: "20vw" }} />
      </Grid.Column>
      <Grid.Column>
        <Image src={Five} style={{ height: "15vw", width: "20vw" }} />
      </Grid.Column>
      <Grid.Column>
        <Reveal animated="move" style={{ cursor: "pointer" }}>
          <Reveal.Content visible>
            <Image src={After3} style={{ height: "15vw", width: "20vw" }} />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src={Before3} style={{ height: "15vw", width: "20vw" }} />
          </Reveal.Content>
        </Reveal>
      </Grid.Column>
      <Grid.Column>
        <Image src={Six} style={{ height: "15vw", width: "20vw" }} />
      </Grid.Column>
  
      <Grid.Column>
        <Image src={Seven} style={{ height: "15vw", width: "20vw" }} />
      </Grid.Column>
      <Grid.Column>
        <Reveal animated="move" style={{ cursor: "pointer" }}>
          <Reveal.Content visible>
            <Image src={After2} style={{ height: "15vw", width: "20vw" }} />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src={Before2} style={{ height: "15vw", width: "20vw" }} />
          </Reveal.Content>
        </Reveal>
      </Grid.Column>
      <Grid.Column>
        <Image src={Eight} style={{ height: "15vw", width: "20vw" }} />
      </Grid.Column>
      <Grid.Column>
        <Image src={TwentyTwo} style={{ height: "15vw", width: "20vw" }} />
      </Grid.Column>
      <Grid.Column>
        <Image src={Eighteen} style={{ height: "15vw", width: "20vw" }} />
      </Grid.Column>
    
      <Grid.Column>
        <Reveal animated="move" style={{ cursor: "pointer" }}>
          <Reveal.Content visible>
            <Image src={After5} style={{ height: "15vw", width: "20vw" }} />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src={Before5} style={{ height: "15vw", width: "20vw" }} />
          </Reveal.Content>
        </Reveal>
      </Grid.Column>
      <Grid.Column>
        <Image src={Twenty} style={{ height: "15vw", width: "20vw" }} />
      </Grid.Column>
      <Grid.Column>
      <Image src={TwentyFour} style={{ height: "15vw", width: "20vw" }} />
      </Grid.Column>
      <Grid.Column>
        <Reveal animated="move" style={{ cursor: "pointer" }}>
          <Reveal.Content visible>
            <Image src={After4} style={{ height: "15vw", width: "20vw" }} />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src={Before4} style={{ height: "15vw", width: "20vw" }} />
          </Reveal.Content>
        </Reveal>
      </Grid.Column>
      <Grid.Column>
      <Image src={Nineteen} style={{ height: "15vw", width: "20vw" }} />
      </Grid.Column>
  </Grid>
  </div>
  </>
);

export default Gallery;
