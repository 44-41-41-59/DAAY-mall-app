import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import { MDBIcon } from 'mdbreact';
import ProductCard from '../product/card';

function StoreProducts(props) {
  return (
    <Card id="letsRock">
      <div>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
          All Products
          </Accordion.Toggle>
        </Card.Header>
        <div  style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
          {props.products.map((product) => {
            return (
              <Accordion.Collapse eventKey="0">
                <ProductCard cardProduct={product} searchPage={true}/>
              </Accordion.Collapse> 
            );
          })}
        </div>
      </div>
    </Card>
  );
}

export default StoreProducts;