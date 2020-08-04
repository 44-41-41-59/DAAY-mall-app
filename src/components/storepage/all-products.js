import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import { MDBIcon } from 'mdbreact';
import ProductCard from '../product/card';
import { If, Then, Else } from '../if/if';
import NotFound from '../notfound/notfound';
import Empty from '../emptypage/emptypage';
import {Link} from 'react-router-dom';

function StoreProducts(props) {
  return (
    <Card id="letsRock">
      <div>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            All Products
          </Accordion.Toggle>
        </Card.Header>
        <If condition={props.products.length}>
          <Then>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {props.products.map((product) => {
                return (
                  <Accordion.Collapse eventKey="0">
                    <ProductCard cardProduct={product} searchPage={true} />
                  </Accordion.Collapse>
                );
              })}
            </div>
          </Then>
          <Else>
            <Accordion.Collapse eventKey="0">
              <div >
                <Empty noProducts={true} />
                <div class="productsLink">
                  <Link to='/add/product' exact ><Button id="productButtonLink">Add new product</Button></Link>
                </div>
              </div>
            </Accordion.Collapse>
          </Else>
        </If>
      </div>
    </Card>
  );
}

export default StoreProducts;