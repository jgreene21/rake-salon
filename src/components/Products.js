import React from 'react';
import { Header, Image, Grid, Container } from 'semantic-ui-react';
import Davines from "../images/Davines.svg";
import Product from "../images/Products.png";

const Products = () => (
  <>
  <Container style={{marginTop: "75px", marginBottom: "75px"}}>
  <Image src={Davines} centered />
  </Container>
  </>
)

export default Products;