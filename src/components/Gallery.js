import React from "react";
import { Grid, Image, Reveal } from "semantic-ui-react";
import One from "../images/1.png";
import Two from "../images/2.png";
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
import Ten from "../images/10.png";

const Gallery = () => (
  <Grid style={{margin: "0 auto"}}>
    <Grid.Row columns={4}>
      <Grid.Column>
        <Image src={One} style={{ height: "25vw", width: "25vw" }} />
      </Grid.Column>
      <Grid.Column>
        <Reveal animated="move" style={{ cursor: "pointer" }}>
          <Reveal.Content visible>
            <Image src={After} style={{ height: "25vw", width: "25vw" }} />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src={Before} style={{ height: "25vw", width: "25vw" }} />
          </Reveal.Content>
        </Reveal>
      </Grid.Column>
      <Grid.Column>
        <Image src={Two} style={{ height: "25vw", width: "25vw" }} />
      </Grid.Column>
      <Grid.Column>
        <Image src={Ten} style={{ height: "25vw", width: "25vw" }} />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={4}>
      <Grid.Column>
        <Image src={Three} style={{ height: "25vw", width: "25vw" }} />
      </Grid.Column>
      <Grid.Column>
        <Image src={Four} style={{ height: "25vw", width: "25vw" }} />
      </Grid.Column>
      <Grid.Column>
        <Reveal animated="move" style={{ cursor: "pointer" }}>
          <Reveal.Content visible>
            <Image src={After3} style={{ height: "25vw", width: "25vw" }} />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src={Before3} style={{ height: "25vw", width: "25vw" }} />
          </Reveal.Content>
        </Reveal>
      </Grid.Column>
      <Grid.Column>
        <Image src={Six} style={{ height: "25vw", width: "25vw" }} />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={4}>
      <Grid.Column>
        <Image src={Seven} style={{ height: "25vw", width: "25vw" }} />
      </Grid.Column>
      <Grid.Column>
        <Reveal animated="move" style={{ cursor: "pointer" }}>
          <Reveal.Content visible>
            <Image src={After2} style={{ height: "25vw", width: "25vw" }} />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src={Before2} style={{ height: "25vw", width: "25vw" }} />
          </Reveal.Content>
        </Reveal>
      </Grid.Column>
      <Grid.Column>
        <Image src={Eight} style={{ height: "25vw", width: "25vw" }} />
      </Grid.Column>
      <Grid.Column>
        <Reveal animated="move" style={{ cursor: "pointer" }}>
          <Reveal.Content visible>
            <Image src={After4} style={{ height: "25vw", width: "25vw" }} />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src={Before4} style={{ height: "25vw", width: "25vw" }} />
          </Reveal.Content>
        </Reveal>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Gallery;
