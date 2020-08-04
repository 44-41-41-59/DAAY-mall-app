import React from 'react';
import './profilepage.css';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import ProductCard from '../product/card';
import {If, Then, Else} from '../if/if';
import NotFound from '../notfound/notfound';


function Wishlist(props) {
  return (
    <>
      <Tab.Pane >
        <Row style={{ marginLeft: '2vh' }}>
          <If condition={props.wishlist.length}>
            <Then>
              {props.wishlist.map((product) => {
                return (
                  <ProductCard cardProduct={product.productID} wishlist={true} searchPage={true} />
                );
              })}
            </Then>
            <Else>
              <NotFound />
            </Else>
          </If>
        </Row>
      </Tab.Pane>
    </>
  );
}

export default Wishlist;

{/* <Card style={{ width: '25%' ,display:'flex',marginLeft:'2vw',marginTop:'1vw'}} >
                <Card.Img variant="top" src={product.productID.images[0]} />
                <Card.Title>{product.productID.name}</Card.Title>
                <p class="card-text">{product.productID.price}</p>
                <Link href="#" class="btn btn-primary">Button</Link>
              </Card> */}