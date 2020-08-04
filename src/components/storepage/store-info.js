import React from 'react';
import Table from 'react-bootstrap/Table';
import {If, Then, Else} from '../if/if';
import {MDBIcon} from 'mdbreact';

function StoreInfo(props) {
  let sum = 0;
  let ratingStars = [];
  let noRate = false;
  let noRateStars = [];
  let emptyRatingStars = [];
  let priceAfterSale = 0;
  props.store.reviews.forEach(review => {
    sum = sum + review.rate;
  });
  let avg = Math.ceil(sum / props.store.reviews.length);
  for (let i = 0; i < avg; i++) {
    ratingStars.push(' ');
  }
  for (let i = 0; i < 5 - avg; i++) {
    emptyRatingStars.push(' ');
  }
  if (isNaN(avg)) {
    noRate = true;
    for (let i = 0; i < 5; i++) {
      noRateStars.push(' ');
    }
  }
  
  return (
    <div id="storeInfo" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <img src={props.store.logo} alt={props.store.name} id="imgStore"/>
      <div class="Card">
        <div class="storeCon">
          <h1>Store name:{props.store.name}</h1>
          <h2>Category:{props.store.category}</h2>
          <h3>Contact number:{props.store.contactNumber}</h3>
          <h4>Address:{props.store.counrty}</h4>
          <If condition={!noRate}>
            <Then>
              {ratingStars.map(star => {
                return <MDBIcon icon='star' />;
              })}
              {emptyRatingStars.map(star => {
                return <MDBIcon far icon='star' />;
              })}
            </Then>
            <Else>
              {noRateStars.map(star => {
                return <MDBIcon far icon='star' />;
              })}
            </Else>
          </If>
        </div>
      </div>
      {/* <div id="tablelong">
        <Table striped bordered hover >
          <thead>
            <tr>
              <th rowspan="2" id="storeLogo">
                <img src={props.store.logo} alt={props.store.name} />
              </th>
              <th>Store name</th>
              <th>Category</th>
              <th>Contact number</th>
              <th>Address</th>
              <th>Reviews</th>
              <th>rate</th>

            </tr>
            <tr>
              <td>{props.store.name}</td>
              <td>{props.store.category}</td>
              <td>{props.store.contactNumber}</td>
              <td>{props.store.counrty} {props.store.city}</td>
              <td>9</td>
              <td>3.8/5</td>
            </tr>
          </thead>
        </Table>
      </div> */}
    </div>
  );
}

export default StoreInfo;