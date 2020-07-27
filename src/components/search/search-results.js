import React from 'react';
// import { connect } from 'react-redux';
// import PaginationFunction from './pagination';
import PaginationBar from './pagination';
import Card from 'react-bootstrap/Card';
import './search.css';

function Results(props) {
  return (
    <>
      <div id='searchResultsBox'>

        {props.products.map(product => {
          return (
            <Card style={{ width: '220px' }}>
              <Card.Img variant="top" src={product.images[0]} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}$</Card.Text>
              </Card.Body>
            </Card>
          );
        })}

        {/* <PaginationFunction
        paginateHandler={props.pagination.currentPage}
        itemsPerPage={props.pagination.itemPerpage}
        totalItems={props.fullList.length}
      /> */}
      </div>
      <PaginationBar />
    </>

  );
}

export default Results;