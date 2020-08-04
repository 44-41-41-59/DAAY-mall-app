import React from 'react';
// import PaginationFunction from './pagination';
import PaginationBar from './pagination';
import Card from 'react-bootstrap/Card';
import { MDBIcon } from 'mdbreact';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { If, Then, Else } from '../if/if';
import Image from 'react-bootstrap/Image'; 



import './search.css';
import products from '../../store/reducers/products';
import ProductCard from '../product/card';

function Results(props) {
  let currentItems = [];
  let pageNumbers = [];
  if (props.currentPage) {
    let idxOfLastItem = props.currentPage * 12;
    let idxOfFirstItem = idxOfLastItem - 12;
    
    currentItems = props.productList.slice(idxOfFirstItem, idxOfLastItem);    
    for (let i = 1; i <= Math.ceil(props.productList.length / 12); i++) {
      pageNumbers.push(i);
    }
  }
  if (!currentItems.length) {
    console.log('empty');
    currentItems= props.productList;
  };
  
  return (
    <>
      <If condition={currentItems.length}>
        <Then>
          <div id='searchResultsBox' style={{width:'80vw'}} >
            <div style={{margin:'5vh 5vw 0vw 0vh', display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
              {/* <div class="row"> */}
              {currentItems.map(item => {
                return (
                  <ProductCard cardProduct={item} searchPage={true}/>
                );
              })}
              {/* </div> */}
            </div>
          </div>
          <PaginationBar products={props.products} pageNumbers={pageNumbers}/>
        </Then>
        <Else>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}} >
            <Image id='notfoundsearchImage' src='https://i.ibb.co/0YxH3qW/6ab1e47de248ab872c71cd685945f0f5.jpg' />
            <p id='returnLink' >Click to return to Home Page</p>
          </div>
        </Else>
      </If>
    
    </>

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


