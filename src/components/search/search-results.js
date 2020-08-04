import React from 'react';
import PaginationBar from './pagination';
import { connect } from 'react-redux';
import { If, Then, Else } from '../if/if';
import Image from 'react-bootstrap/Image';

import './search.scss';
import ProductCard from '../product/card';

function Results(props) {
  let currentItems = [];
  let pageNumbers = [];
  if (props.currentPage) {
    let idxOfLastItem = props.currentPage * 8;
    let idxOfFirstItem = idxOfLastItem - 8;

    currentItems = props.productList.slice(idxOfFirstItem, idxOfLastItem);
    for (let i = 1; i <= Math.ceil(props.productList.length / 8); i++) {
      pageNumbers.push(i);
    }
  }
  if (!currentItems.length) {
    console.log('empty');
    currentItems = props.productList;
  };

  return (
    <div style={{marginLeft: '45vh' }}>
      <If condition={currentItems.length}>
        <Then>
          <div style={{ width: '72vw' }} >
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
              {currentItems.map(item => {
                return (
                  <ProductCard cardProduct={item} searchPage={true} />
                );
              })}
            </div>
          </div>
          <PaginationBar products={props.products} pageNumbers={pageNumbers} />
        </Then>
        <Else>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <Image id='notfoundsearchImage' src='https://i.ibb.co/0YxH3qW/6ab1e47de248ab872c71cd685945f0f5.jpg' />
            <p id='returnLink' >Click to return to Home Page</p>
          </div>
        </Else>
      </If>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products.results,
    currentPage: state.pagination.currentPage,
  };
};


// export default Results;
export default connect(mapStateToProps)(Results);


