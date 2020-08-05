import React from 'react';
// import './storepage.css';
import Button from 'react-bootstrap/Button';
import ProductCard from '../product/card';
import Empty from '../emptypage/emptypage';
import { Link } from 'react-router-dom';
import { If, Then, Else } from '../if/if';

function OnSale(props) {
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
            <Empty noProducts={true} />
            <If condition={props.user.role === 'owner'}>
              <Then>
                <div class="productsLink">
                  <Link to='/add/product' exact ><Button id="productButtonLink">Add new ON Sale</Button></Link>
                </div>
              </Then>
              <Else>
                <div class="productsLink">
                  <Link to='/products' exact > No products on Sale yet</Link>
                </div>
              </Else>
            </If>
          </div>
        </Else>
      </If>
    </div>
  );
}

export default OnSale;