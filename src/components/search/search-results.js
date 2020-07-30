import React from 'react';
// import PaginationFunction from './pagination';
import PaginationBar from './pagination';
import Card from 'react-bootstrap/Card';
import { MDBIcon } from 'mdbreact';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';



import './search.css';

function Results(props) {
  let currentItems = [];
  let pageNumbers = [];
  if (props.currentPage && props.itemPerPage) {
    let idxOfLastItem = props.currentPage * props.itemPerPage;
    let idxOfFirstItem = idxOfLastItem - props.itemPerPage;
    
    currentItems = props.products.slice(idxOfFirstItem, idxOfLastItem);    
    console.log('why???????', props.itemPerPage, currentItems);
    for (let i = 1; i <= Math.ceil(props.products.length / props.itemPerPage); i++) {
      pageNumbers.push(i);
    }
  }
  if (!currentItems.length) {
    console.log('empty');
    currentItems= props.products;
  };
  
  return (
    <>
      <div id='searchResultsBox'>
        <div class="container">
          <div class="row">
            {currentItems.map(item => {
              return (
                <div class="col-12 col-sm-8 col-md-6 col-lg-4" id='searchResultCards'>
                  <div class="card" id='cardImageSearch'>
                    <img class="card-img" id='cardImageSearch' src={item.images[0]} alt={item.name} />
                    <div class="card-img-overlay d-flex justify-content-end">
                      <MDBIcon far icon="heart" id='heartIcon' />
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">{item.name.split(' ')[0]} {item.name.split(' ')[1]} {item.name.split(' ')[2]}</h4>
                      <h6 class="card-subtitle mb-2 text-muted">Category: {item.category}</h6>
                      <div class="buy d-flex justify-content-between align-items-center">
                        <div class="price" id='priceColor'><h5 class="mt-4" id='price-search'>{item.price} JOD</h5></div>
                        <div id='cartAdd-search'>
                          <div>Add to cart</div>
                          <div>
                            <MDBIcon icon="shopping-cart" id='addCart-search-icon' />
                          </div>
                        </div>
                        {/* <button>Add to Cart<MDBIcon icon="shopping-cart" /></button> */}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* {props.products.map(product => {
          return (
            <Card style={{ width: '220px' }}>
              <Card.Img variant="top" src={product.images[0]} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}$</Card.Text>
              </Card.Body>
            </Card>
          );
        })} */}

        {/* <PaginationFunction
        paginateHandler={props.pagination.currentPage}
        itemsPerPage={props.pagination.itemPerpage}
        totalItems={props.fullList.length}
      /> */}
      </div>
      <PaginationBar products={props.products} pageNumbers={pageNumbers}/>
    </>

  );
}

const mapStateToProps = (state) => {
  console.log('results state', state);
  return {
    products: state.products.results,
    currentPage: state.pagination.currentPage,
    itemPerPage: state.pagination.itemPerPage,
  };
};


// export default Results;
export default connect(mapStateToProps)(Results);


