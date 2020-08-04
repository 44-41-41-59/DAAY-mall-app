import React from 'react';
import './homepage.css';
import { MDBIcon } from 'mdbreact';
import ProductCard from '../product/card';

export const Sale = (props) => {
  return (
    <>
      <span id='saleSection'></span>
      <div style={{ padding: '3vh 2vw 2vh', fontSize: '1.5rem' }}>
        <MDBIcon icon="dollar-sign" style={{ color: '#424242' }} />
        <span style={{ color: '#424242', paddingLeft: '1vw' }}>Sale</span>
      </div>
      <div class="container slideRowContainer">
        <div class="row" id="slideRow">
          {props.products.mainProducts.onSale &&
            props.products.mainProducts.onSale.map((item) => {
              return (
                <ProductCard cardProduct={item} />
              );
            })}
        </div>
      </div>
    </>
  );
};

export const TopRanked = (props) => {
  return (
    <>
      <span id='topSection'></span>

      <div style={{ padding: '3vh 2vw 2vh', fontSize: '1.5rem' }}>
        <MDBIcon icon="chart-line" style={{ color: '#424242' }} />
        <span style={{ color: '#424242', paddingLeft: '1vw' }}>Top products</span>
      </div>

      <div class="container slideRowContainer">
        <div class="row" id="slideRow">
          {props.products.mainProducts.ranked &&
            props.products.mainProducts.ranked.map((item) => {
              return (
                <ProductCard cardProduct={item} />
              );
            })}
        </div>
      </div>
    </>
  );
};

export const NewArrivals = (props) => {
  return (
    <>
      <span id='newSection'></span>

      <div style={{ padding: '3vh 2vw 2vh', fontSize: '1.5rem' }}>
        <MDBIcon icon="newspaper" style={{ color: '#424242' }} />
        <span style={{ color: '#424242', paddingLeft: '1vw' }}>New</span>
      </div>

      <div class="container slideRowContainer">
        <div class="row" id="slideRow">
          {props.products.mainProducts.newest &&
            props.products.mainProducts.newest.map((item) => {
              return (
                <ProductCard cardProduct={item} />
              );
            })}
        </div>
      </div>
    </>
  );
};

