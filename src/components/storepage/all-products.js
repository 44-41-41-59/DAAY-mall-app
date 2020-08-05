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
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';


function StoreProducts(props) {
  return (
    <div>
      <If condition={props.products.length}>
        <Then>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {props.products.map((product) => {
              return (
                <ProductCard cardProduct={product} searchPage={true} />
              );
            })}
          </div>
        </Then>
        <Else>
          <div >
            <If condition={props.user.role === 'owner'}>
              <Then>
                <Empty noProducts={true} />
                <div class="productsLink">
                  <Link to='/add/product' exact ><Button id="productButtonLink">Add new product</Button></Link>
                </div>
              </Then>
              <Else>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                  <Image id='notfoundImage' style={{ width: '30vw', alignSelf: 'center' }} src='https://static.dribbble.com/users/1124975/screenshots/2885648/youchai.jpg' />
                  <div class="productsLink">
                    <Link to='/add/product' exact >No Products in this store yet</Link>
                  </div>
                </div>
              </Else>
            </If>
          </div>
        </Else>
      </If>
    </div>
  );
}

export default StoreProducts;