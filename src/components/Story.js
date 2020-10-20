import React from 'react';
import styled from "styled-components";

const Story = () => (
  <StoryContainer style={{marginBottom: "5%"}}>
  <OurStory>Our Story</OurStory>
  <Title>Specialties</Title>
  <Body>At Rake Salon we specialize in listening to our clients and providing them with exceptional hair care services. From cutting to coloring, highlights and texturizing perms, we can handle any hair situation. Keeping up with current trends and advanced education to better service our clients is a priority.</Body>
  <br/>
  <Title>History</Title>
  <Italic>Established in 2014.</Italic>
  <br/>
  <Body>Staci Calegari and Shannon Jackson purchased rake salon in 2018. Long time friends, with decades of industry experience we love living out the dream of owning and running our own shop in the heart of downtown Brentwood. We are blessed with an amazingly talented staff that all share the love of providing our clientele with the best service possible.
  </Body>
  <br/>
  <Title>Meet the Business Owner</Title>
  <Italic>Staci and Shannon</Italic>
  <br/>
  <Body>Long time friends Staci Calegari and Shannon Jackson purchased rake salon in 2018. With decades of combined experience in the industry, we are living out our dream providing a wonderful environment for our talented staff and most wonderful clientele. We thank all of you for your continued love and support and for helping us make it all possible.</Body>
  </StoryContainer>
);

const OurStory = styled.p`{
  font-family: Playfair Display;
  font-style: italic;
  font-weight: 300;
  font-size: 40px;
  text-align: center;
  @media(max-width: 700px) {
    font-size: 20px
    }
}
`
const Title = styled.p`{
  font-family: Playfair Display;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  @media(max-width: 700px) {
    font-size: 15px
    }
}
`
const Body = styled.p`{
  font-family: Playfair Display;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  @media(max-width: 700px) {
    font-size: 12px
    }
}
`

const Italic = styled.p`{
  font-family: Playfair Display;
  font-style: italic;
  font-weight: normal;
  font-size: 15px;
  @media(max-width: 700px) {
    font-size: 12px
    }
}
`

const StoryContainer = styled.div`{
  margin: 0 auto;
  width: 50%;
  margin-top: 2%;
  margin-bottom: 5% 
  @media(max-width: 700px) {
    width: 100% 
    }
}
`


export default Story;