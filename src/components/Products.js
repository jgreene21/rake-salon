import React from 'react';
import {  Image,  Container } from 'semantic-ui-react';
import Davines from "../images/Davines.svg";

const Products = () => (
  <>
  <Container style={{marginTop: "75px", marginBottom: "75px"}}>
  <Image src={Davines} centered />
  </Container>
  </>
)

export default Products;